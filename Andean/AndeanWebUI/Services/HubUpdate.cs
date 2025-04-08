using AndeanClass.Controllers;
using AndeanSystems;
using AndeanWebUI.Services;

namespace Andean.AndeanWebUI.Services
{
    public class HubUpdate : AndeanSystem
    {
        public override async void Update()
        {
            if (ControlPanelHubService.IsMatch == true)
            {
                await LiveViewHubService.SendMatchDataUpdate();
            }
        }
    }
}
