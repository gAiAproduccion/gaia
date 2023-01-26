<%@ Page Title="" Language="C#" MasterPageFile="~/Vistas/PaginasMaestra/MasterPage.Master" AutoEventWireup="true" CodeBehind="Cuenta.aspx.cs" Inherits="PROY2018.Vistas.Principal.Cuenta" %>

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

    <script src="../../Recursos/js/ajax/Cuenta.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="contenidoSistema" runat="server">
    <table class="cuerpo">
        <tr align="center">
            <td colspan="2" align="center">
                <div class="divSomreado" align="center" style="background: white; border-radius: 50px; padding-left: 50px; padding-right: 50px; width: 30%">
                    <b style="font-size: 30px;">
                        <label id="lblSaludo"></label>
                    </b>
                </div>
            </td>
        </tr>
        <tr align="center">
            <td colspan="2" align="center">
                <br />
                 <img src="../../Recursos/imagenes/Robot%20final.png" style="width:50%; text-align:center " />
            </td>
        </tr>
    </table>
   
</asp:Content>
