using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace PROY2018.Controllers
{
    public class ControlSesion
    {

        public void validaSesion()
        {
            try
            {
                if (HttpContext.Current.Session["EstadoConexion"].ToString() != "1")
                {
                    HttpContext.Current.Session.RemoveAll();
                    HttpContext.Current.Session.Clear();
                    HttpContext.Current.Session.Abandon();
                    HttpContext.Current.Response.Redirect("~/Vistas/Principal/Login.aspx", false);
                }
                //elseC:\Users\Estiven Rodriguez\Documents\Proyectos\PROY2018\PROY2018\Vistas\Principal\Inicio.aspx
                //{
                //    HttpContext.Current.Response.Redirect("../Principal/Inicio.aspx", false);
                //}

            }
            catch (Exception)
            {
                HttpContext.Current.Response.Redirect("~/Vistas/Principal/Login.aspx");
            }
        }

        public void inicioSesion()
        {
            try
            {
                if (HttpContext.Current.Session["EstadoConexion"].ToString() == "1")
                {
                    HttpContext.Current.Response.Redirect("../Principal/Inicio.aspx", false);
                }

            }
            catch (Exception)
            {
                //HttpContext.Current.Response.Redirect("login.aspx");
            }
            //return "";
        }
    }
}