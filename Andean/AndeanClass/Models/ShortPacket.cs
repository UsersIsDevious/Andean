using System;
using System.Collections.Generic;
using System.Linq;
using AndeanClass;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json.Linq;

namespace AndeanClass
{
    /// <summary>
    /// メッセージパケット化するクラス
    /// </summary>
    public class ShortPacket
    {
        /// <summary>
        /// マッチ開始からの経過秒数
        /// </summary>
        public double T { get; set; }

        /// <summary>
        /// 各エンティティのデータ配列
        /// (例: エンティティのID、位置情報、体力情報などを含む)
        /// </summary>
        public List<EventPlayer> Data { get; set; }

        /// <summary>
        /// イベントの配列
        /// </summary>
        public List<Dictionary<string, object>> Events { get; set; } = new List<Dictionary<string, object>>();

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="t">マッチ開始からの経過秒数</param>
        /// <param name="data">各エンティティのデータ配列</param>
        /// <param name="events">イベントの配列</param>
        public ShortPacket(double t, List<EventPlayer> data, List<Event> events)
        {
            T = t;
            Data = data;
            Events = events
                .Select(ev => ev.Data
                    .Concat(new[] { new KeyValuePair<string, object>("category", ev.Category) })
                    .ToDictionary(kvp => kvp.Key, kvp => kvp.Value))
                .ToList();
        }
    }
}
