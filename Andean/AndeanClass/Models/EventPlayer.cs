using System.Text.Json;
using System.Text.Json.Serialization;

namespace Andean.AndeanClass.Models
{   
    public class EventPlayer
    {
        public string id { get; set; }

        // pos 配列は必ず3要素であることを保証する
        private double[] _pos = new double[3];
        public double[] pos
        {
            get => _pos;
            set
            {
                if (value == null || value.Length != 3)
                {
                    throw new ArgumentException("pos 配列は3つの要素を持つ必要があります。");
                }
                _pos = value;
            }
        }

        // hp 配列は必ず4要素であることを保証する
        private uint[] _hp = new uint[4];
        public uint[] hp
        {
            get => _hp;
            set
            {
                if (value == null || value.Length != 4)
                {
                    throw new ArgumentException("hp 配列は4つの要素を持つ必要があります。");
                }
                _hp = value;
            }
        }

        public double ang { get; set; }

        public EventPlayer(string id, double[] pos, uint[] hp, double ang)
        {
            this.id = id;
            this.pos = pos;
            this.hp = hp;
            this.ang = ang;
        }


        public Dictionary<string,object> Get()
        {
            return new Dictionary<string, object>()
            {
                { "id", this.id },
                { "pos", this.pos },
                { "hp", this.hp },
                { "ang", this.ang }
            };
        }
    }
}
