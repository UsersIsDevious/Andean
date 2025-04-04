using AndeanSystems;
using Andean.AndeanClass;
using AndeanClass.Controllers;
using static AndeanClass.Controllers.AndeanClassController;

namespace Andean.AndeanClass.Controllers
{
    public class AndeanClassUpdateController : AndeanSystem
    {
        public void Update()
        {
            Console.WriteLine(_match);
        }
    }
}
