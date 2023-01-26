using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PROY2018.Controllers
{
    public partial class ctlLogin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Models.ConexionSql cx = new Models.ConexionSql();

            string pa = Request.Form["pa"];
            string res = "";

            Session["EstadoConexion"] = "0";
            Session["Usuario"] = "";
            Session["SesionClave"] = "";

            switch (pa)
            {
                case "paAPP_UsuarioLogin_validar":
                    res = cx.Listar2("paAPP_UsuarioLogin_validar",
                    "usuario", Request.Form["usuario"],
                    "password", Request.Form["password"]);

                    List<string> info = new List<string>();
                    info = res.Split(',').ToList<string>();

                    if (info[0] == "1")
                    {
                        Session["EstadoConexion"] = "1";
                        Session["SesionClave"] = info[2];
                        Session["Usuario"] = info[1].ToString().Replace(" ","");
                    }
                    Response.Write(info[0]);
                    break;


                case "paAPP_CerrarSesion_guardar":
                    res = cx.Listar2("paAPP_CerrarSesion_guardar",
                    "usuario", Session["Usuario"],
                    "clave", Session["SesionClave"]);

                    List<string> info1 = new List<string>();
                    info1 = res.Split(',').ToList<string>();

                    if (info1[0] == "1")
                    {
                        Session["EstadoConexion"] = "0";
                        Session["SesionClave"] = null;
                        Session["Usuario"] = null;
                    }

                    Response.Write(info1[0]);
                    break;
            }
        }
    }
}