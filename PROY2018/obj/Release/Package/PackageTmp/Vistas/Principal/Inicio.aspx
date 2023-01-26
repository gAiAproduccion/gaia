<%@ Page Title="" Language="C#" MasterPageFile="~/Vistas/PaginasMaestra/MasterPage.Master" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="PROY2018.Vistas.Principal.Inicio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../../Diseño/css/Contenido.css" rel="stylesheet" />

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="/Scripts/_references.js" type="text/javascript"></script>
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

    <%--select buscar--%>
    <link href="../../Diseño/css/SelectBuscar.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></script>

    <%--google charts--%>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        //google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.load('current', { 'packages': ['Line'] });
        google.charts.load('current', { 'packages': ['bar'] });
        //google.charts.setOnLoadCallback(drawStuff);
    </script>

    <%--CLOUD MQTT--%>
    <script src="../../Recursos/js/ajax/mqttws31.js" type="text/javascript"></script>

    <script src="http://code.jquery.com/jquery-1.3.2.min.js"></script>
    <script src="../../Recursos/js/ajax/html2csv.js"></script>

    <script type='text/javascript' src='https://www.google.com/jsapi'></script>
    <script src="../../Recursos/js/ajax/Inicio.js"></script>




</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="contenidoSistema" runat="server">

    <%--calendario--%>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

    <script>
        $(function () {
            $(".CampoCalendario").datepicker({
                dateFormat: "dd/mm/yy"
            });;
        });
    </script>

    <table class="cuerpo">
        <tr align="left">
            <td colspan="2" align="left">
                <div class="divSomreado" align="center" style="background: white; border-radius: 50px; padding-left: 50px; padding-right: 50px; width: 30%">
                    <b style="font-size: 30px;">
                        <label id="lblSaludo"></label>
                    </b>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <div style="background: white;" class="divSomreadoPadding">
                    <table style="width: 100%; text-align: left;">
                        <tr>
                            <td style="width: 130px;">Cliente 
                            </td>
                            <td style="position: static">
                                <select id="selEmpresa" class="select-css" onchange="Equipos_cargar();">
                                    <option value="-1">Selecciona una Opción</option>
                                </select>
                            </td>
                            <td align="right">
                                <img src="../../Recursos/imagenes/Robot%20final.png" style="width: 70px" />
                            </td>
                        </tr>

                    </table>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div style="background: white;" class="divSomreadoPadding">
                    <table>
                        <tr>
                            <td>Equipo
                            </td>
                            <td>
                                <select id="selEquipo1" class="select-css selectBuscar" onchange="Canal_cargar(this.value);">
                                </select>
                            </td>
                            <td>Visualización
                            </td>
                            <td>
                                <select id="selVisualizacion" class="select-css selectBuscar" >
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Variable
                            </td>
                            <td>
                                <select id="selParametro1" class="select-css selectBuscar" onchange="EquiposMediciones_listar();ValidarVariable(this.value);">
                                </select>
                            </td>
                            <td>Canal
                            </td>
                            <td>
                                <select id="selCanal" class="select-css selectBuscar" onchange="variables_cargar();">
                                </select>
                            </td>

                        </tr>
                        <tr>
                            <td>Resolución
                            </td>
                            <td>
                                <select id="selResolucion" class="select-css selectBuscar" style="width: 130px" >
                                </select>
                            </td>
                            <td>Desde
                            </td>
                            <td>
                                <input type="text" id="txtDesde" class="cuadroTextoCorto CampoCalendario" style="width: 150px; text-align: center" onchange="EquiposMediciones_listar();" />

                                Hasta
                                <input type="text" id="txtHasta" class="cuadroTextoCorto CampoCalendario" style="width: 150px; text-align: center" onchange="EquiposMediciones_listar();" />
                            </td>

                            <td style="width: 30px;">
                                <a onclick="EquiposMediciones_listar();" style="cursor: pointer;">Recargar
                                <input type="image" src="../../Recursos/imagenes/recargar.png" style="width: 25px; cursor: pointer;" class="iconoAtivo submitButton" />
                                </a>
                            </td>

                        </tr>
                        <tr style="display: none">
                            <td>
                                <input type="checkbox" checked onclick="controlLed(this.checked);" />Luz on/off
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="divGraf1" style="border: 1px solid #ccc; width: 100%;">
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>

        <tr>
            <td>
                <div class="divSomreadoPadding">
                    <div class="datatable-container" style="width: 100%;">
                        <div class="header-tools" style="align-items: center" align="center">
                            <b>Resultados Inteligencia Artificial</b>
                        </div>
                        <div id="divListadoDatosResumen" style="background: white; max-height: 400px; width: 100%; overflow-y: auto" class="tablaListado">
                        </div>
                        <div id="divListadoDatos" style="background: white; max-height: 400px; overflow-y: auto" class="tablaListado">
                        </div>
                        <div class="footer-tools" style="align-items: center" align="center">
                            <button class="boton" type="button" onclick="tableToCSV()">
                                Download CSV
                            </button>
                        </div>
                    </div>
                    <%--<div class="footer-tools">
                        </div>--%>
                </div>
            </td>
        </tr>
        <tr style="display: none">
            <td>
                <div style="background: white;">
                    /////////////////
                </div>
            </td>
            <td>
                <div style="background: white;">
                    +++++++++++++++
                </div>
            </td>
        </tr>
    </table>


</asp:Content>

