using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PROY2018.Vistas.Principal
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Controllers.ControlSesion myobject = new Controllers.ControlSesion();

            myobject.inicioSesion();
        }
    }
}