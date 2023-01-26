using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace PROY2018.Controllers
{
    public partial class ctlMensaje : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {

            Models.ConexionSql cx = new Models.ConexionSql();
            string mensajeOrigen = Request.Form["mensaje"];
            string topic = Request.Form["topic"];

            string retorno = "";
            string bnd = "1";
            string tipo = "";


            string deviceId = "";
            string deviceNombre = "";

            List<string> metricsNombre = new List<string>();
            List<string> metricsUnidad = new List<string>();
            string metricsHora = "";
            List<string> metricsValor = new List<string>();


            if (topic == "IoTenergy/eficiencia")//accu energy (primero equipos)
            {

                try
                {
                    tipo = "1";

                    DeserializarMSG.Rootobject result = JsonConvert.DeserializeObject<DeserializarMSG.Rootobject>(mensajeOrigen);

                    deviceId = result.deviceId.ToString();
                    deviceNombre = result.facilityId.ToString();

                    for (int i = 0; i < result.metrics.Length; i++)
                    {
                        metricsHora = result.metrics[i].timestamp;

                        metricsNombre.Add(result.metrics[i].name);
                        metricsUnidad.Add(result.metrics[i]._uint);
                        metricsValor.Add(result.metrics[i].value);

                    }

                }
                catch
                {
                    bnd = "0";
                }
            }
            else if (topic == "MQTT_RT_DATA" || topic == "MQTT_ENY_NOW")//compere (últimos equipos)
            {
                try
                {

                    tipo = "3";
                    deviceNombre = "";

                    JObject root = JObject.Parse(mensajeOrigen);
                    IEnumerable<JProperty> properties = root.Properties();
                    List<string> lista = new List<string>();

                    foreach (JProperty prop in properties)
                    {
                        //new System.Linq.SystemCore_EnumerableDebugView<System.Collections.Generic.KeyValuePair<string, Newtonsoft.Json.Linq.JToken>>(root).Items[0].value

                        if (prop.Name == "id")
                        {
                            deviceId = prop.Value.ToString();
                        }
                        else if (prop.Name == "time")
                        {
                            metricsHora=prop.Value.ToString();
                        }
                        else if (prop.Name != "id" && prop.Name != "isend")
                        {
                            metricsNombre.Add(prop.Name);
                            metricsUnidad.Add("");
                            metricsValor.Add(prop.Value.ToString());
                            
                        }

                    }

                    
                }
                catch
                {
                    bnd = "0";
                }
            }
            else//arduino
            {
                tipo = "2";
            }



            retorno = cx.Listar("paPRODU_Metricas_guardar",
                  "deviceId", string.Join("|", deviceId).ToString(),
                  "deviceNombre", string.Join("|", deviceNombre).ToString(),
                  "metricsNombre", string.Join("|", metricsNombre).ToString(),
                  "metricsUnidad", string.Join("|", metricsUnidad).ToString(),
                  "metricsHora", metricsHora,
                  "metricsValor", string.Join("|", metricsValor).ToString(),
                  "mensajeOrigen", string.Join("|", mensajeOrigen).ToString(),
                  "topic", string.Join("|", topic).ToString(),
                  "bnd", string.Join("|", bnd).ToString(),
                  "tipo", string.Join("|", tipo).ToString()

                  );


            //Clases.Rootobject result = JsonConvert.DeserializeObject<Clases.Rootobject>(responseAFI_PREST.Content);

        }

        /* [ValidateInput(false)]
          void DeserializarMSG()
         {
             string mensajeOrigen = Request.Form["mensaje"];


         }*/

    }
}