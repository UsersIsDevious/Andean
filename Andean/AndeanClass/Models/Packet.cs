using System;
using System.Collections.Generic;
using System.Linq;

namespace Andean.AndeanClass
{
    /// <summary>
    /// メッセージパケット化するクラス
    /// </summary>
    public class Packet
    {
        /// <summary>
        /// マッチ開始からの経過秒数
        /// </summary>
        public double T { get; set; }

        /// <summary>
        /// 各エンティティのデータ配列
        /// (例: エンティティのID、位置情報、体力情報などを含む)
        /// </summary>
        public List<object> Data { get; set; }

        /// <summary>
        /// イベントの配列
        /// </summary>
        public List<Event> Events { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="t">マッチ開始からの経過秒数</param>
        /// <param name="data">各エンティティのデータ配列</param>
        /// <param name="events">イベントの配列</param>
        public Packet(double t, List<object> data = null, List<Event> events = null)
        {
            T = t;
            Data = data ?? new List<object>();
            Events = events ?? new List<Event>();
        }

        /// <summary>
        /// パケットを JSON 形式に変換する
        /// (各イベントは、timestamp、category、および data プロパティを含むオブジェクトに変換)
        /// </summary>
        /// <returns>JSON形式のオブジェクト</returns>
        public object ToJson()
        {
            return new
            {
                t = T,
                data = Data,
                events = Events.Select(e => new
                {
                    timestamp = e.Timestamp,
                    category = e.Category,
                    data = e.Data
                }).ToList()
            };
        }

        /// <summary>
        /// データを追加する
        /// </summary>
        /// <param name="entityData">追加するエンティティ情報</param>
        public void AddData(object entityData)
        {
            Data.Add(entityData);
        }

        /// <summary>
        /// 指定したインデックスのデータを更新する
        /// </summary>
        /// <param name="index">更新するデータのインデックス</param>
        /// <param name="entityData">更新するエンティティ情報</param>
        public void UpdateData(int index, object entityData)
        {
            if (index >= 0 && index < Data.Count)
            {
                Data[index] = entityData;
            }
        }

        /// <summary>
        /// イベントを追加する
        /// </summary>
        /// <param name="ev">追加する Event インスタンス</param>
        public void AddEvent(Event ev)
        {
            Events.Add(ev);
        }
    }
}
