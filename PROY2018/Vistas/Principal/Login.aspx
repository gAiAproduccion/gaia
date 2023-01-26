<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="PROY2018.Vistas.Principal.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>


    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

    <%---------------------ESTILOS----------------%>

    <link href="../../Diseño/css/Login.css" rel="stylesheet" type="text/css" />
    <link href="../../Diseño/css/General.css" rel="stylesheet" type="text/css" />
    <link href="../../Diseño/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="../../Recursos/imagenes/Robot%20final.png" />

</head>
<body>

    <script src="../../Recursos/js/ajax/Login.js" type="text/javascript"></script>
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

    <%--<form id="form1" runat="server" class="form">
        <div class="LoginFormulario">
            <h2 class="TituloLogin">Iniciar Sesión</h2>
            <hr />
            <br />
        </div>
        <div class="LoginFormulario">
            <input class="controls" type="text" placeholder="Usuario" id="txtusuario" />
        </div>
        <div class="LoginFormulario">
            <input class="controls" type="password" placeholder="Contraseña" id="txtclave" onkeypress="validarLogin(event)" />

            <label class="mensaje" id="lblmensaje"></label>
        </div>
        <div class="LoginFormulario">
            <input class="boton" type="button" onclick="login();" value="INGRESAR" />

            <p><a href="#">¿Olvidastes  tu contraseña?</a></p>
        </div>
    </form>--%>

    <form class="form">
        <h2 class="form_tittle">Iniciar Sesión <br /> </h2>

        <div class="form_container">
            <div class="form_group">
                <input class="form_input" type="text" placeholder="Usuario" id="txtusuario" />
            </div>
            <div class="form_group">
                <input class="form_input" type="password" placeholder="Contraseña" id="txtclave" onkeypress="validarLogin(event)" />
                <label class="mensaje" id="lblmensaje"></label>
            </div>
                <input class="boton" type="button" onclick="login();" value="INGRESAR" />

                <p><a href="#">¿Olvidaste  tu contraseña?</a></p>
        </div>

    </form>
</body>
</html>
