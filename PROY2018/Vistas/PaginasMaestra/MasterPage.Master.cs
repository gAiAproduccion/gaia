using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PROY2018.Vistas.PaginasMaestra
{
    public partial class MasterPage : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Controllers.ControlSesion myobject = new Controllers.ControlSesion();

            myobject.validaSesion();
        }
    }
}