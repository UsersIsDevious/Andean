using AndeanSystems;
using AndeanClass.Controllers;
using static AndeanClass.Controllers.AndeanClassController;
using AndeanClass;

namespace AndeanClass.Controllers
{
    public class AndeanClassUpdateController : AndeanSystem
    {
        public void Update()
        {
            long unixTime = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
            double time = unixTime - (long)_match.StartTimeStamp;
            _packet = new Packet(time);
        }
    }
}
