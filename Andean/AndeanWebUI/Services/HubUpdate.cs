using AndeanClass.Controllers;
using AndeanSystems;
using AndeanWebUI.Services;

namespace Andean.AndeanWebUI.Services
{
    public class HubUpdate : AndeanSystem
    {
        public override async Task Update()
        {
            if (ControlPanelHubService.IsMatch == true)
            {
                //await LiveViewHubService.SendMatchDataUpdate();
            }
        }
    }
}
