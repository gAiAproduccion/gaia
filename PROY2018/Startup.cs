using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PROY2018.Startup))]
namespace PROY2018
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
