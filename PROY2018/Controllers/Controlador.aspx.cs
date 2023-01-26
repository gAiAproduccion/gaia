using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;

namespace PROY2018.Controllers
{
    public partial class Controlador : System.Web.UI.Page
    {
        //string retorno = "";
        //Models.ConexionSql cx = new Models.ConexionSql();
        protected void Page_Load(object sender, EventArgs e)
        {
            Models.ConexionSql cx = new Models.ConexionSql();

            string p = Request.Form["pa"];
            string retorno = "";
            string Usuario = Session["Usuario"].ToString();


            switch (p)
            {
                case "datos_listar":
                    retorno = cx.Listar("paPRO_datos_listar",
                    "id", Request.Form["id"]);
                    Response.Write(retorno);
                    break;

                case "ParametrosSensores_listar":
                    retorno = cx.Listar("paPRO_ParametrosSensores_listar");
                    Response.Write(retorno);
                    break;

                case "SensorParam_guardar":
                    retorno = cx.Listar("paPRO_SensorParam_guardar",
                        "TempMin", Request.Form["TempMin"],
                        "TempMax", Request.Form["TempMax"],
                        "HumedadMin", Request.Form["HumedadMin"],
                        "HumedadMax", Request.Form["HumedadMax"],
                        "PHMin", Request.Form["PHMin"],
                        "PHMax", Request.Form["PHMax"],
                        "RadMin", Request.Form["RadMin"],
                        "RadMax", Request.Form["RadMax"]);
                    Response.Write(retorno);
                    break;

                case "paPRO_Alertas_guardar":
                    retorno = cx.Listar("paPRO_Alertas_guardar"
                       );
                    Response.Write(retorno);
                    break;

                case "paPRO_Alertas_listar":
                    retorno = cx.Listar("paPRO_Alertas_listar",
                    "nodo", Request.Form["nodo"],
                    "tipo", Request.Form["tipo"],
                    "fechaIni", Request.Form["fechaIni"],
                    "fechaFin", Request.Form["fechaFin"]
                       );
                    Response.Write(retorno);
                    break;

                case "paPRO_Estadisticas_listar":
                    retorno = cx.Listar("paPRO_Estadisticas_listar",
                    "nodo", Request.Form["nodo"]
                       );
                    Response.Write(retorno);
                    break;

                case "EquiposMediciones_listar":
                    retorno = cx.Listar("paPRODU_EquiposMediciones_listar",
                    "resolucion", Request.Form["resolucion"],
                    "equipoId", Request.Form["equipoId"],
                    "variable", Request.Form["variable"],
                    "canal", Request.Form["canal"],
                    "visualizacion", Request.Form["visualizacion"],
                    "fechaIni", Request.Form["fechaIni"],
                    "fechaFin", Request.Form["fechaFin"]
                       );
                    Response.Write(retorno);
                    break;

                case "EquiposMedicionesResumen_listar":
                    retorno = cx.Listar("paPRODU_EquiposMedicionesResumen_listar",
                    "resolucion", Request.Form["resolucion"],
                    "equipoId", Request.Form["equipoId"],
                    "variable", Request.Form["variable"],
                    "canal", Request.Form["canal"],
                    "visualizacion", Request.Form["visualizacion"],
                    "fechaIni", Request.Form["fechaIni"],
                    "fechaFin", Request.Form["fechaFin"]
                       );
                    Response.Write(retorno);
                    break;

                case "Empresas_cargar":
                    retorno = cx.Listar("paPRODU_Empresas_cargar",
                    "Usuario", Usuario
                       );
                    Response.Write(retorno);
                    break;

                case "Equipos_cargar":
                    retorno = cx.Listar("paPRODU_Equipos_cargar",
                    "empresa", Request.Form["empresa"],
                    "Usuario", Usuario
                       );
                    Response.Write(retorno);
                    break;

                case "Variables_cargar":
                    retorno = cx.Listar("paPRODU_Variables_cargar",
                    "canal", Request.Form["canal"],
                    "equipoId", Request.Form["equipoId"],
                    "Usuario", Usuario
                       );
                    Response.Write(retorno);
                    break;

                case "Canal_cargar":
                    retorno = cx.Listar("paPRODU_Canal_cargar"
                       );
                    Response.Write(retorno);
                    break;

                case "CanalxEquipo_cargar":
                    retorno = cx.Listar("paPRODU_CanalxEquipo_cargar",
                    "equipo", Request.Form["equipo"]
                       );
                    Response.Write(retorno);
                    break;

                case "Select_cargar":
                    retorno = cx.Listar("paPRODU_Select_cargar",
                    "categoria", Request.Form["categoria"]
                       );
                    Response.Write(retorno);
                    break;

                case "Resolucion_cargar":
                    retorno = cx.Listar("paPRODU_Resolucion_cargar"
                       );
                    Response.Write(retorno);
                    break;

                case "AlertasMediciones_listar":
                    retorno = cx.Listar("paPRODU_AlertasMediciones_listar",
                    "empresa", Request.Form["empresa"],
                    "equipoId", Request.Form["equipoId"],
                    "variable", Request.Form["variable"],
                    "fechaIni", Request.Form["fechaIni"],
                    "fechaFin", Request.Form["fechaFin"]
                       );
                    Response.Write(retorno);
                    break;

                case "AlertasCreadas_listar":
                    retorno = cx.Listar("paPRODU_AlertasCreadas_listar",
                    "alerta_id", Request.Form["alerta_id"],
                    "empresa", Request.Form["empresa"],
                    "equipoId", Request.Form["equipoId"],
                    "variable", Request.Form["variable"],
                    "pag", Request.Form["pag"],
                    "CantRegistros", "10"
                       );
                    Response.Write(retorno);
                    break;

                case "Saludo_cargar":
                    retorno = cx.Listar("paPRO_Saludo_cargar",
                    "usuario", Usuario);
                    Response.Write(retorno);
                    break;

                case "Alertas_guardar":
                    retorno = cx.Listar("paPRODU_Alertas_guardar",
                    "id", Request.Form["id"],
                    "equipo", Request.Form["equipo"],
                    "variable", Request.Form["variable"],
                    "igualacion", Request.Form["igualacion"],
                    "intervalo", Request.Form["intervalo"],
                    "valor", Request.Form["valor"],
                    "horaDesde", Request.Form["horaDesde"],
                    "horaHasta", Request.Form["horaHasta"],
                    "canal", Request.Form["canal"],
                    "TipoAlerta", Request.Form["TipoAlerta"],
                    "DiasSemana", Request.Form["DiasSemana"],
                    "usuario", Usuario
                       );
                    Response.Write(retorno);
                    break;

                case "paPRODU_Alertas_eliminar":
                    retorno = cx.Listar("paPRODU_Alertas_eliminar",
                    "id", Request.Form["id"],
                    "usuario", Usuario
                       );
                    Response.Write(retorno);
                    break;

                case "DiasSemana_cargar":
                    retorno = cx.Listar("paPRODU_DiasSemana_cargar");
                    Response.Write(retorno);
                    break;

            }
        }


     
    }
}

