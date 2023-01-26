using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PROY2018.Controllers
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Models.ConexionSql cx = new Models.ConexionSql();

            string p = Request.Form["p"];
            string retorno = "";



            switch (p)
            {
                case "infoBD":
                    string url = @"https://api.thingspeak.com/channels/338002/feeds.json?api_key=9HAIYG8T06X3TG7Y&results=2";

                    var json = new WebClient().DownloadString(url);
                    retorno = cx.Listar("paPRO_datos_guardar",
                    "datos", json);
                   // Response.Write(retorno);
                    break;

                                   

            }
        }
    }
}