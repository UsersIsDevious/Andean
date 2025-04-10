using System;
using System.IO;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Andean.ApexLiveAPI.Services
{
    // 出力するエントリー情報（マージされるフィールドのみ）
    public class PlaylistEntry
    {
        [JsonProperty("name")]
        public string? Name { get; set; }
        [JsonProperty("max_players")]
        public string? MaxPlayers { get; set; }
        [JsonProperty("max_teams")]
        public string? MaxTeams { get; set; }
        [JsonProperty("map_name")]
        public string? MapName { get; set; }
        [JsonProperty("map")]
        public string? Map { get; set; }
        [JsonProperty("variants")]
        public Dictionary<string, PlaylistEntry>? Variants { get; set; } = new Dictionary<string, PlaylistEntry>();
    }

    // カテゴリ情報：カテゴリ名をキーとして各エントリーを保持する
    public class PlaylistCategory
    {
        public Dictionary<string, PlaylistEntry> Entries { get; set; } = new Dictionary<string, PlaylistEntry>();
    }

    // 全体の結果クラス：カテゴリ名をキーとして各カテゴリ情報を保持する
    public class PlaylistResult
    {
        public Dictionary<string, PlaylistCategory> Categories { get; set; } = new Dictionary<string, PlaylistCategory>();
    }

    class ApexPlaylistExtractor
    {
        // 取り込み対象のフィールド (vars から取得する項目と、gamemodesで取得するmap) を定義
        // "name" を追加
        static readonly string[] TargetFields = new string[] { "max_players", "max_teams", "map_name", "map", "name" };

        /// <summary>
        /// ルートのJObjectからプレイリスト情報を抽出し、PlaylistResultクラスに変換して返します。
        /// プレイリスト構造は、defaults内のvarsからカテゴリ・エントリーのキー構造を参照し、
        /// 各エントリーについて再帰的にマージ処理(GetMergedEntry)を行います。
        /// </summary>
        public static PlaylistResult? GeneratePlaylistData(JObject playlist_r5)
        {
            // Gamemodes > defaults > vars を取得
            JObject? defaultVars = playlist_r5["playlists"]?["Gamemodes"]?["defaults"]?["vars"] as JObject;
            if (defaultVars == null)
            {
                Console.Error.WriteLine("Error: 'vars' node not found in JSON structure.");
                return null;
            }

            // カスタムマッチプレイリストコードからカテゴリ・エントリーのキー構造を取得
            string defaultKey = defaultVars["custom_match_playlist_code_default_key"]?.ToString() ?? "";
            int categoryIndex = defaultKey.IndexOf("0");
            int entryIndex = defaultKey.IndexOf("0", categoryIndex + 1);
            string categoryKeyDefault = defaultKey.Substring(0, categoryIndex);
            string entryKeyDefault = defaultKey.Substring(categoryIndex + 1, entryIndex - (categoryIndex + 1));
            int categoryCount = int.Parse(defaultVars[$"{categoryKeyDefault}count"]?.ToString() ?? "0");

            // Playlists および Includes ノードを取得
            JObject? playlists = playlist_r5["playlists"]?["Playlists"] as JObject;
            JObject? includes = playlist_r5["playlists"]?["Includes"] as JObject;
            if (playlists == null)
            {
                Console.Error.WriteLine("Error: 'Playlists' node not found in JSON structure.");
                return null;
            }

            // 各カテゴリごとのエントリー情報を中間の JObject として構築
            JObject intermediateResult = new JObject();
            for (int i = 0; i < categoryCount; i++)
            {
                string categoryKey = $"{categoryKeyDefault}{i}";
                string categoryNameKey = $"{categoryKey}_name";
                string categoryCountKey = $"{categoryKey}_count";
                string? categoryName = defaultVars[categoryNameKey]?.ToString()?.Trim();
                int entryCount = int.Parse(defaultVars[categoryCountKey]?.ToString() ?? "0");

                JObject categoryEntries = new JObject();
                for (int j = 0; j < entryCount; j++)
                {
                    string entryKey = $"{categoryKey}{entryKeyDefault}{j}";
                    string? entryName = defaultVars[entryKey]?.ToString()?.Trim();
                    if (!string.IsNullOrEmpty(entryName))
                    {
                        // 再帰の始点として visited セットを生成し、depth は 0 とする
                        JObject? mergedEntry = GetMergedEntry(playlists, includes, entryName, 0, new HashSet<string>());
                        if (mergedEntry != null && mergedEntry.HasValues)
                        {
                            categoryEntries[entryName] = mergedEntry;
                        }
                    }
                }
                if (!string.IsNullOrEmpty(categoryName) && categoryEntries.HasValues)
                {
                    intermediateResult[categoryName] = categoryEntries;
                }
            }

            // 中間結果を定義済みのクラスに変換
            return ConvertResultToClass(intermediateResult);
        }

        /// <summary>
        /// 指定のエントリーキーから、対象フィールド（vars, gamemodes, include, inherit）を
        /// 指定の順にマージし、最終的に max_players, max_teams, map_name, map, name の情報を持つ JObject を返します。
        /// 再帰呼び出し時に循環参照が発生しないよう、visited セットを利用するとともに、
        /// "name" は最初に呼ばれた時（depth==0）のみ取得し、それ以降の階層では取得しません。
        /// </summary>
        static JObject? GetMergedEntry(JObject playlists, JObject? includes, string entryKey, int depth, HashSet<string> visited)
        {
            // 既に訪問済みの場合、再度処理を行わない
            if (!visited.Add(entryKey))
            {
                return null;
            }

            JObject? entryObj = GetEntry(playlists, includes, entryKey);
            if (entryObj == null)
            {
                visited.Remove(entryKey);
                return null;
            }

            var merged = new Dictionary<string, string>();

            // ローカル関数：source JObject から TargetFields をマージ（未設定の場合のみ設定）
            void MergeFromSource(JObject source)
            {
                foreach (string field in TargetFields)
                {
                    // "name" は最初の階層 (depth==0) でのみ取得する
                    if (field == "name" && depth > 0)
                        continue;
                    string value = source[field]?.ToString()?.Trim() ?? "";
                    if (!string.IsNullOrEmpty(value) && !merged.ContainsKey(field))
                    {
                        merged[field] = value;
                    }
                }
            }

            // ① 自身の vars 情報（最優先）
            if (entryObj["vars"] is JObject varsObj)
                MergeFromSource(varsObj);

            // ② gamemodes の情報（次に優先）
            if (entryObj["gamemodes"] is JObject gamemodesObj)
            {
                foreach (var modeProp in gamemodesObj.Properties())
                {
                    if (modeProp.Value is JObject modeObj && modeObj["maps"] is JObject mapsObj)
                    {
                        foreach (var mapProp in mapsObj.Properties())
                        {
                            string mapId = mapProp.Name?.Trim() ?? "";
                            if (!string.IsNullOrEmpty(mapId) && !merged.ContainsKey("map"))
                            {
                                merged["map"] = mapId;
                                break;
                            }
                        }
                    }
                    if (merged.ContainsKey("map"))
                        break;
                }
            }

            // ③ include 内の情報（浅い階層）
            if (entryObj["include"] is JObject includeObj)
            {
                foreach (var prop in includeObj.Properties())
                {
                    string includeKey = prop.Name?.Trim() ?? "";
                    if (!string.IsNullOrEmpty(includeKey))
                    {
                        JObject? childMerged = GetMergedEntry(playlists, includes, includeKey, depth + 1, visited);
                        if (childMerged != null)
                            MergeFromSource(childMerged);
                    }
                }
            }

            // ④ inherit 内の情報（単一）
            if (entryObj["inherit"] != null)
            {
                string inheritKey = entryObj["inherit"]!.ToString()?.Trim() ?? "";
                if (!string.IsNullOrEmpty(inheritKey))
                {
                    JObject? parentMerged = GetMergedEntry(playlists, includes, inheritKey, depth + 1, visited);
                    if (parentMerged != null)
                        MergeFromSource(parentMerged);
                }
            }

            // マージ結果の対象フィールドがない場合は null を返す
            if (merged.Count == 0)
            {
                visited.Remove(entryKey);
                return null;
            }

            JObject result = new JObject();
            foreach (var kv in merged)
            {
                result[kv.Key] = kv.Value;
            }

            // variants の情報を vars 内からチェックして追加
            if (entryObj["vars"] is JObject originalVars)
            {
                JObject variantsObj = new JObject();

                // "tournament_variant" の処理
                string? tournamentVariantKey = originalVars["tournament_variant"]?.ToString()?.Trim();
                if (!string.IsNullOrEmpty(tournamentVariantKey))
                {
                    JObject? variantMerged = GetMergedEntry(playlists, includes, tournamentVariantKey, depth + 1, visited);
                    if (variantMerged != null && variantMerged.HasValues)
                    {
                        // もし variant の "name" が未設定の場合、"map_name" に "(tournament_variant)" を付加
                        if (variantMerged["name"] == null || string.IsNullOrEmpty(variantMerged["name"]?.ToString()))
                        {
                            string? mapName = variantMerged["map_name"]?.ToString();
                            if (!string.IsNullOrEmpty(mapName))
                            {
                                variantMerged["name"] = "Tournament";
                            }
                        }
                        variantsObj[tournamentVariantKey] = variantMerged;
                    }
                }

                // "no_ring_variant" の処理
                string? noRingVariantKey = originalVars["no_ring_variant"]?.ToString()?.Trim();
                if (!string.IsNullOrEmpty(noRingVariantKey))
                {
                    JObject? variantMerged = GetMergedEntry(playlists, includes, noRingVariantKey, depth + 1, visited);
                    if (variantMerged != null && variantMerged.HasValues)
                    {
                        // もし variant の "name" が未設定の場合、"map_name" に "(no_ring_variant)" を付加
                        if (variantMerged["name"] == null || string.IsNullOrEmpty(variantMerged["name"]?.ToString()))
                        {
                            string? mapName = variantMerged["map_name"]?.ToString();
                            if (!string.IsNullOrEmpty(mapName))
                            {
                                variantMerged["name"] = "No Ring";
                            }
                        }
                        variantsObj[noRingVariantKey] = variantMerged;
                    }
                }
                if (variantsObj.HasValues)
                {
                    result["variants"] = variantsObj;
                }
            }

            visited.Remove(entryKey);
            return result;
        }

        /// <summary>
        /// Playlists または Includes ノードから、指定されたキーに対応するエントリー JObject を取得します。
        /// </summary>
        static JObject? GetEntry(JObject playlists, JObject? includes, string key)
        {
            return playlists[key] as JObject ?? (includes != null ? includes[key] as JObject : null);
        }

        /// <summary>
        /// 中間の JObject 結果を、定義済みクラス（PlaylistResult, PlaylistCategory, PlaylistEntry）に変換します。
        /// ルートの各プロパティはカテゴリ名、値は各エントリーの JObject（キーがエントリー名）と仮定。
        /// </summary>
        static PlaylistResult ConvertResultToClass(JObject intermediateResult)
        {
            PlaylistResult result = new PlaylistResult();
            foreach (var categoryProp in intermediateResult.Properties())
            {
                string categoryName = categoryProp.Name;
                if (categoryProp.Value is not JObject entriesObj)
                    continue;

                var entries = new Dictionary<string, PlaylistEntry>();
                foreach (var entryProp in entriesObj.Properties())
                {
                    PlaylistEntry? entry = entryProp.Value.ToObject<PlaylistEntry>();
                    if (entry != null)
                        entries.Add(entryProp.Name, entry);
                }
                result.Categories.Add(categoryName, new PlaylistCategory { Entries = entries });
            }
            return result;
        }

    }
}
