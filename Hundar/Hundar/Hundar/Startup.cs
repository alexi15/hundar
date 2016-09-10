using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Hundar.Startup))]
namespace Hundar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
