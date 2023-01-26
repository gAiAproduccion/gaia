<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Principal.aspx.cs" Inherits="PROY2018.Views.Principal" %>

<%--<asp:content id="Content1" contentplaceholderid="titulo" runat="server">
    .:: Áreas ::.
</asp:content>


<asp:content id="Content2" contentplaceholderid="contenidoSistema" runat="server">

    <script src="../../Scripts/Java/Principal.js" type="text/javascript"></script>

    <div id="divPrincipal" >
        hola mundo
    </div>

</asp:content>--%>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=devide-width, user-scalable=no, initiall-scale=1.0, maximum-scale=1.0, minimum-sclae=1.0" />

    <title>Control Sensores</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>



    <%---------------------ESTILOS----------------%>

    <link href="../../Diseño/css/Desing.css" rel="stylesheet" type="text/css" />
    <link href="../../Diseño/css/font-awesome.css" rel="stylesheet" type="text/css" />



    <%---------------------GRAFICAS----------------%>

    <script src="https://www.google.com/jsapi" type="text/javascript"></script>

    <script type="text/javascript">
        // Load the Visualization API and the piechart package.
        google.load('visualization', '1.0', { 'packages': ['corechart'] });
        //$(document).ready(function () {
        //    drawChart();
        //})
    </script>
    <%--<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChartTemp);

    </script>--%>
</head>
<body>

    <script src="../../Recursos/js/ajax/Principal.js" type="text/javascript"></script>
    <script src="/Scripts/_references.js" type="text/javascript"></script>
    <%--<script src="/Scripts/bootstrap.js" type="text/javascript"></script>--%>
    <%--<script src="/Scripts/bootstrap.min.js" type="text/javascript"></script>--%>
    <%--<script src="/Scripts/jquery-1.10.2.intellisense.js" type="text/javascript"></script>--%>
    <script src="/Scripts/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="/Scripts/jquery-1.10.2.min.js" type="text/javascript"></script>
    <script src="/Scripts/jquery.validate-vsdoc.js" type="text/javascript"></script>
    <script src="/Scripts/jquery.validate.js" type="text/javascript"></script>
    <script src="/Scripts/jquery.validate.min.js" type="text/javascript"></script>
    <script src="/Scripts/jquery.validate.unobtrusive.js" type="text/javascript"></script>
    <script src="/Scripts/jquery.validate.unobtrusive.min.js" type="text/javascript"></script>
    <script src="/Scripts/modernizr-2.6.2.js" type="text/javascript"></script>
    <script src="/Scripts/respond.js" type="text/javascript"></script>
    <script src="/Scripts/respond.min.js" type="text/javascript"></script>

    <form id="form1" runat="server" style="display:none">
        <div id="divPrincipal">
            <div class="ventanaMensaje">
                <div class="form" style="text-align: center; border: 2px solid; border-radius: 5px; width: 290px; height: 110px">
                    <br />
                    <h4>INFORMACIÓN ALMACENADA
                        <br />
                        CORRECTAMENTE</h4>
                </div>
            </div>
            <div class="wrap">
                <ul class="tabs">
                    <li><a href="#tabInicio"><span class="tab-text" style="font-family:Verdana"><b>INICIO</b></span></a></li>
                    <li><a href="#tabAlertas"><span class="tab-text" style="font-family:Verdana"><b>ALERTAS</b></span></a></li>
                    <li><a href="#tabTemp"><span class="tab-text"style="font-family:Verdana"><b>TEMPERATURA</b></span></a></li>
                    <li><a href="#tabHumedad"><span class="tab-text" style="font-family:Verdana"><b>HUMEDAD</b></span></a></li>
                    <li><a href="#tabRadiacion"><span class="tab-text" style="font-family:Verdana"><b>RADIACIÓN</b></span></a></li>
                    <li><a href="#tabPH"><span class="tab-text" style="font-family:Verdana"><b>PH</b></span></a></li>
                    <li><a href="#tabParam"><span class="tab-text" style="font-family:Verdana"><b>PARAMETROS</b></span></a></li>

                </ul>
                <div class="secciones centrar">

                    <article id="tabInicio">

                        <table>
                            <%--<tr>
                                <td style="text-align:center" colspan="2">
                                    <h1 style="color:#217346; font-family:'Lucida Bright'; font-size:30px"><b>PROTOTIPO IoT CON TECNOLOGÍA LoRa EN MONITOREO <br /> DE CULTIVOS AGRICOLAS</b></h1>
                                </td>
                            </tr>--%>
                            <tr>
                                <td>
                                        <ul>
                                                     <li title="Detalle Empresa" id="li0.10"><a href="<% Response.Write(Page.ResolveUrl("~/vistas/Principal/Prueba.aspx")); %>">
                                                        <span>Detalle Empresa</span></a> </li>
                                        </ul>
                                </td>
                            </tr>
                            <tr style="height: 350px">
                                <td style="text-align: left" colspan="2">
                                    <div style=" width: 1050px; height:410px">
                                        <table class="centrar">
                                            <tr>
                                                <td>
                                                    <img src="../../Recursos/imagenes/inicio.jpg" style="width:auto" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                           <%-- <tr>
                                <td>
                                    <b>Estadísticas</b>
                                </td>
                                <td style="text-align: right">
                                    <b>Seleccione un Nodo&nbsp;&nbsp;</b>
                                    <select id="selEstNono" style="border-radius: 5px" onchange="Estadisticas_listar(this.value)">
                                        <option value="1">NODO 1</option>
                                        <option value="2">NODO 2</option>
                                        <option value="3">NODO 3</option>
                                    </select>
                                </td>
                            </tr>--%>
                            <tr style="height: 250px">
                                <td style="text-align: left" colspan="2">
                                    <div style="border: 2px solid; border-radius: 10px; width: 1050px; height: 390px;  background-image:url(FRON.jpg); background-size:auto" >
                                        <table class="centrar">
                                            <tr style="position:absolute">
                                                <td>
                                                    <div style="padding-top:51px; padding-left:500px">
                                                        <%--<b>Seleccione un Nodo&nbsp;&nbsp;</b>--%>
                                                        <select id="selEstNono" style="height:30px; border-radius: 5px" onchange="Estadisticas_listar(this.value);" >
                                                            <option value="1">NODO 1</option>
                                                            <option value="2">NODO 2</option>
                                                            <option value="3">NODO 3</option>
                                                        </select>
                                                    </div>
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                
                                                <td style="text-align:center" colspan="7">
                                                    <div style="padding-top:120px;">
                                                        <label style="font-family:Tahoma; font-size:25px; text-shadow:10px" id="lblEstaditicas"></label>
                                                        <br />
                                                        <br />
                                                        <br />
                                                    </div>
                                                     
                                                   
                                                </td>
                                            </tr>
                                            <tr style="text-align:center">
                                                <td>
                                                    <div id="divEstTemp" ></div>
                                                </td>
                                                <%--<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <div id="divEstHumedad"></div>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <div id="divEstRadiacion"></div>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <div id="divEstPh"></div>
                                                </td>--%>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </article>

                    <article id="tabAlertas">

                        <table>
                            <tr>
                                <td><b>Tipo de Sensor&nbsp;&nbsp;</b>
                                </td>
                                <td>
                                    <select id="selTipoSensor" style="border-radius: 5px" onchange="Alertas_listar();">
                                        <option value="-1">TODOS</option>
                                        <option value="1">TEMPERATURA</option>
                                        <option value="2">HUMEDAD</option>
                                        <option value="3">PH</option>
                                        <option value="4">RADIACION</option>
                                    </select>
                                </td>

                                <td><b>Fecha Inicial&nbsp;&nbsp;</b>
                                </td>
                                <td>
                                    <input id="txtFechaIni" placeholder="DD/MM/AAAA" style="border-radius: 5px"  onblur="Alertas_listar();"/>
                                </td>

                                

                            </tr>
                            <tr>
                                
                                
                                <td><b>Nodo&nbsp;&nbsp;</b>
                                </td>
                                <td>
                                    <select id="selNodo" style="border-radius: 5px" onchange="Alertas_listar();"">
                                        <option value="-1">TODOS</option>
                                        <option value="1">NODO 1</option>
                                        <option value="2">NODO 2</option>
                                        <option value="3">NODO 3</option>
                                    </select>
                                </td>
                                <td><b>Fecha Final&nbsp;&nbsp;</b>
                                </td>
                                <td>
                                    <input id="txtFechaFin" placeholder="DD/MM/AAAA" style="border-radius: 5px" onblur="Alertas_listar();"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br />
                                    <br />
                                    <br />
                                </td>
                            </tr>
                            <tr style="height: 550px">
                                <%--<td style="text-align: left">
                                    <div style="border: 2px solid; border-radius: 10px; width: 410px; height: 610px">
                                        <table class="centrar">
                                            <tr>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>--%>

                                <td style="text-align: right;" colspan="4">
                                    <div <%--style="border: 2px solid; border-radius: 10px; width: 1050px; height: 510px"--%>>
                                        <table class="centrar">
                                            <tr>
                                                <td>
                                                    <div id="divListaAlertas" class="datagrid" style="width: 1040px; height: 550px; overflow: auto">
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </article>

                    <article id="tabTemp">
                        <table>
                            <tr>
                                <td style="text-align: right">
                                    <h2>Seleccione un Nodo&nbsp;&nbsp;</h2>
                                </td>
                                <td style="width:80px;">                                    
                                    <select id="selTemp" style="border-radius: 5px; height:30px" onchange="controlDivs(this.id,this.value)">
                                        <option value="1">NODO 1</option>
                                        <option value="2">NODO 2</option>
                                        <option value="3">NODO 3</option>
                                    </select>
                                </td>
                            </tr>
                            <tr style="text-align: center">
                                <td class="centrar" colspan="2">
                                    <h1>
                                        <label id="lblTemp"></label>
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div id="divTempGeneral">
                                        <div id="divTemp1" class="Borde centrar" style="width: 1050px">
                                        </div>
                                        <div id="divTemp2" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                        <div id="divTemp3" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>


                    </article>
                    <article id="tabHumedad">
                        <table>
                             <tr>
                                <td style="text-align: right">
                                    <h2>Seleccione un Nodo&nbsp;&nbsp;</h2>
                                </td>
                                <td style="width:80px;">                                    
                                    <select id="selHumedad" style="border-radius: 5px; height:30px" onchange="controlDivs(this.id,this.value)">
                                        <option value="1">NODO 1</option>
                                        <option value="2">NODO 2</option>
                                        <option value="3">NODO 3</option>
                                    </select>
                                </td>
                            </tr>
                            
                            <tr style="text-align: center">
                                <td class="centrar" colspan="2">
                                    <h1>
                                        <label id="lblHumedad"></label>
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div id="divHumedadGeneral">
                                        <div id="divHumedad1" class="Borde centrar" style="width: 1050px">
                                        </div>
                                        <div id="divHumedad2" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                        <div id="divHumedad3" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </article>
                    <article id="tabRadiacion">
                        <table>
                            <tr>
                                <td style="text-align: right">
                                    <h2>Seleccione un Nodo&nbsp;&nbsp;</h2>
                                </td>
                                <td style="width:80px;">                                    
                                    <select id="selRadiacion" style="border-radius: 5px; height:30px" onchange="controlDivs(this.id,this.value)">
                                        <option value="1">NODO 1</option>
                                        <option value="2">NODO 2</option>
                                        <option value="3">NODO 3</option>
                                    </select>
                                </td>
                            </tr>
                            
                            <tr style="text-align: center">
                                <td class="centrar" colspan="2">
                                    <h1>
                                        <label id="lblRadiacion"></label>
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div id="divRadiacionGeneral">
                                        <div id="divRadiacion1" class="Borde centrar" style="width: 1050px">
                                        </div>
                                        <div id="divRadiacion2" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                        <div id="divRadiacion3" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </article>
                    <article id="tabPH">
                        <table>
                            <tr>
                                <td style="text-align: right">
                                    <h2>Seleccione un Nodo&nbsp;&nbsp;</h2>
                                </td>
                                <td style="width:80px;">                                    
                                    <select id="selPH" style="border-radius: 5px; height:30px" onchange="controlDivs(this.id,this.value)">
                                        <option value="1">NODO 1</option>
                                        <option value="2">NODO 2</option>
                                        <option value="3">NODO 3</option>
                                    </select>
                                </td>
                            </tr>
                                                        
                            <tr style="text-align: center">
                                <td class="centrar" colspan="2">
                                    <h1>
                                        <label id="lblPH"></label>
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div id="divPHGeneral">
                                        <div id="divPH1" class="Borde centrar" style="width: 1050px">
                                        </div>
                                        <div id="divPH2" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                        <div id="divPH3" class="Borde centrar" style="width: 1050px; display: none">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </article>
                    <article id="tabParam">
                        <div style="border: 2px solid; border-radius: 10px">
                            <table class="centrar">
                                <tr>
                                    <td>
                                        <img src="../../Recursos/imagenes/Termometro.jpg" style="width: 150px;" />
                                    </td>

                                    <td>
                                        <b>MIN. </b>&nbsp;&nbsp;&nbsp;&nbsp;<input id="txtValorMinTemp" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />&nbsp;<b>°C</b>
                                        <br />
                                        <br />
                                        <b>MAX. </b>&nbsp;&nbsp;<input id="txtValorMaxTemp" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />&nbsp;<b>°C</b>
                                    </td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>
                                        <img src="../../Recursos/imagenes/Humedad2.jpg" style="width: 150px;" />
                                    </td>
                                    <td>
                                        <b>MIN. </b>&nbsp;&nbsp;&nbsp;&nbsp;<input id="txtValorMinHumedad" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />&nbsp;<b>%</b>
                                        <br />
                                        <br />
                                        <b>MAX. </b>&nbsp;&nbsp;<input id="txtValorMaxHumedad" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />&nbsp; <b>%</b>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <img src="../../Recursos/imagenes/ph2.jpg" style="width: 150px;" />
                                    </td>
                                    <td>
                                        <b>MIN. </b>&nbsp;&nbsp;&nbsp;&nbsp;<input id="txtValorMinPH" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />
                                        <br />
                                        <br />
                                        <b>MAX. </b>&nbsp;&nbsp;<input id="txtValorMaxPH" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />
                                    </td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>
                                        <img src="../../Recursos/imagenes/radiacion3.jpg" style="width: 150px;" />
                                    </td>
                                    <td>
                                        <b>MIN. </b>&nbsp;&nbsp;&nbsp;&nbsp;<input id="txtValorMinRadiacion" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />&nbsp;<b> w/m2 </b>
                                        <br />
                                        <br />
                                        <b>MAX. </b>&nbsp;&nbsp;<input id="txtValorMaxRadiacion" style="width: 100px; height: 35px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: bold" />&nbsp;<b> w/m2 </b>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <table class="centrar">
                                <tr>
                                    <td>
                                        <div onclick="SensorParam_guardar();">
                                            <img src="../../Recursos/imagenes/guardar.jpg" style="width: 170px; cursor: pointer" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div id="divListaParametros" class="Borde centrar" style="width: 1050px; display: none">
                        </div>

                        <%--<div id="divParametrizacion" style="display: none">
                            <table class="centrar">
                                <tr>
                                    <td colspan="4" class="centrar" >
                                        <b>SENSOR DE <label class="centrar" id="lblSensor" style="font-size:large; text-align:center;"></label></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <br />
                                    </td>
                                </tr>
                                <tr>                                    
                                    <td>
                                        Valor Mínimo
                                    </td>
                                    <td>
                                        <input id="txtValorMin" />
                                    </td>
                                    <td>
                                        Valor Máximo
                                    </td>
                                    <td>
                                        <input id="txtValorMax" />
                                    </td>
                                </tr>
                                 <tr>
                                    <td>
                                        <br />
                                    </td>
                                </tr>
                                 <tr>
                                    <td>
                                        <br />
                                    </td>
                                </tr>
                                <tr>
                                   
                                    <td colspan="2">                                        
                                       <div align="right" onclick="SensorParam_guardar();">
                                           <b style="color:green; font-size:20px; cursor:pointer"">GUARDAR </b>&nbsp;&nbsp;&nbsp;
                                          
                                        </div>
                                    </td>                                    
                                    <td colspan="2">
                                        <div onclick="modificar_sensor_cancelar();">
                                            &nbsp;&nbsp;&nbsp;<b style="color:red; font-size:20px; cursor:pointer">CANCELAR</b>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>--%>
                    </article>
                    
                    <table class="centrar;">
                        <tr class="centrar">
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td style="text-align:center; color:gray" colspan="4">
                                Universidad Distrital Francisco José de Caldas<br />                                
                                Jordan Camilo Triana - Estiven Rodriguez <br />
                                Ingeniería en Telecomunicaciones <br />
                                2018
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </form>


</body>
</html>
