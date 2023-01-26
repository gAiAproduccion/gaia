<%@ Page Title="" Language="C#" MasterPageFile="~/Vistas/PaginasMaestra/MasterPage.Master" AutoEventWireup="true" CodeBehind="Alertas.aspx.cs" Inherits="PROY2018.Vistas.Principal.Alertas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../../Diseño/css/Contenido.css" rel="stylesheet" />
    <link href="../../Diseño/css/Paginador.css" rel="stylesheet" />

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

    <%--pestañas--%>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="../../Diseño/css/Pestanas.css" rel="stylesheet" />
    <script type="text/javascript" src="../../Recursos/js/Pestanas/ControlPestanas.js"></script>
    <%--<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>--%>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>


    <script src="../../Recursos/js/ajax/Alertas2.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="contenidoSistema" runat="server">

    <table class="cuerpo">
        <tr>
            <td colspan="2">
                <div style="background: white;" class="divSomreadoPadding">
                    <table style="width: 100%; text-align: left;">
                        <tr>
                            <td style="width: 130px;">Cliente 
                            </td>
                            <td style="text-align: left">
                                <select id="selEmpresa" class="select-css">
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
            <td colspan="2">
                <div class="divSomreadoPadding">
                    <table style="width: 100%;">

                        <tr>
                            <td>
                                <div class="contenedorPestanas" style="width: 100%;">
                                    <div class="titulo letraTitulo" align="center">ALERTAS</div>
                                    <div id="pestanas">
                                        <ul id="lista">
                                            <li id="pestana1" class="liPestanas"><a href='javascript:cambiarPestanna(pestanas,pestana1);'>Alertas</a></li>
                                            <li id="pestana2" class="liPestanas"><a href='javascript:cambiarPestanna(pestanas,pestana2);' onclick="AlertasAdministracion_listar(1)">Configuración</a></li>
                                        </ul>
                                    </div>

                                    <div id="contenidopestanas">
                                        <div id="cpestana1" class="divPestanas">
                                            <table class="cuerpo" style="width: 100%;">
                                                <tr>
                                                    <td>
                                                        <div style="background: white;" align="center">
                                                            <table>
                                                                <tr>
                                                                    <td>Equipo
                                                                    </td>
                                                                    <td>
                                                                        <select id="selEquipo1" class="select-css selectBuscar" onchange="Alertas_listar()">
                                                                        </select>
                                                                    </td>

                                                                    <td>Variable
                                                                    </td>
                                                                    <td>
                                                                        <select id="selParametro1" class="select-css selectBuscar" onchange="Alertas_listar();">
                                                                        </select>
                                                                    </td>

                                                                </tr>
                                                                <tr>

                                                                    <td>Desde
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" id="txtDesde" class="cuadroTexto CampoCalendario" style="width: 150px; text-align: center" onchange="Alertas_listar();" />
                                                                    </td>
                                                                    <td>Hasta
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" id="txtHasta" class="cuadroTexto CampoCalendario" style="width: 150px; text-align: center" onchange="Alertas_listar();" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                        <div class="datatable-container" style="width: 100%;">
                                                            <div class="header-tools">
                                                            </div>
                                                            <div id="divListadoDatos" style="background: white; max-height: 400px; overflow-y: auto" class="tablaListado">
                                                            </div>

                                                        </div>
                                                    </td>
                                                </tr>

                                            </table>
                                        </div>
                                        <div id="cpestana2" class="divPestanas">
                                            <table class="cuerpo" style="width: 100%;">
                                                <tr>
                                                    <td>
                                                        <div style="background: white;" align="center">
                                                            <table>
                                                                <tr>
                                                                    <td>Equipo
                                                                    </td>
                                                                    <td>
                                                                        <select id="selEquipo2" class="select-css selectBuscar">
                                                                        </select>
                                                                    </td>

                                                                    <td>Variable
                                                                    </td>
                                                                    <td>
                                                                        <select id="selParametro2" class="select-css selectBuscar">
                                                                        </select>
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Desigualdad
                                                                    </td>
                                                                    <td>
                                                                        <select id="selDesigualdad" class="select-css selectBuscar">
                                                                        </select>
                                                                    </td>
                                                                    <td>Intervalo de Tiempo
                                                                    </td>
                                                                    <td>
                                                                        <select id="SelIntervaloTiempo" class="select-css selectBuscar">
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tipo
                                                                    </td>
                                                                    <td>
                                                                         <select id="SelTipo" class="select-css selectBuscar">
                                                                        </select>
                                                                    </td>
                                                                    <td>Canal
                                                                    </td>
                                                                    <td>
                                                                         <select id="SelCanal" class="select-css selectBuscar">
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Valor
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" id="txtvalor" class="cuadroTexto CampoCalendario" style="text-align: center" />
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Días Semana
                                                                    </td>
                                                                    <td colspan="3">
                                                                        <select id="SelDiasSemana" class="select-css selectBuscar" style="width: 865px" multiple="multiple">
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4" style="text-align: center">
                                                                        <hr />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4" style="text-align: center">Franja Horaria
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td colspan="4" style="text-align: center">Desde
                                                                    
                                                                       <input type="text" id="txthoraDesde" placeholder="HH:MM" class="cuadroTextoCorto" style="text-align: center" />
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        Hasta
                                                                   
                                                                       <input type="text" id="txthoraHasta" placeholder="HH:MM" class="cuadroTextoCorto" style="text-align: center" />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td colspan="4" align="center">
                                                                        <input class="boton" type="button" onclick="guardarAlerta();" value="Guardar" />
                                                                    </td>
                                                                </tr>

                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                        <div class="datatable-container" style="width: 100%;">
                                                            <div class="header-tools">
                                                            </div>
                                                            <div id="divListadoAdminAlertas" style="background: white; max-height: 400px; overflow-y: auto" class="tablaListado">
                                                            </div>
                                                            <div id="divListadoAdminAlertasPaginador" class="footer-tools" style="align-items: center" align="center">
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
        <tr style="display: none">
            <td>
                <div class="dcs" style="width: 1080px;">
                </div>
            </td>
        </tr>
    </table>



</asp:Content>
