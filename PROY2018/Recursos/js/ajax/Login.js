$(document).ready(function () {
    document.getElementById("lblmensaje").innerHTML = " ";
});



function login() {
    var usu = document.getElementById('txtusuario').value;
    var cla = document.getElementById('txtclave').value;

    if ((usu != '') && (cla != '')) {
        var arrayParameters = new Array();
        arrayParameters.push('pa=paAPP_UsuarioLogin_validar');
        arrayParameters.push('usuario=' + usu);
        arrayParameters.push('password=' + cla);
        var send = arrayParameters.join('&');
        $.post('../../Controllers/ctlLogin.aspx', send, login_process);
    } else {
        document.getElementById("lblmensaje").innerHTML = "Ingrese usuario y contraseña";
    }
}



function login_process(res) {
    try {
        var info = eval("(" + res + ")");
        switch (info) {
            case -1:
                muestraVentana(mensajeErrorConexion);
                break;
            case 0:
                muestraVentana('Datos Invalidos.');
                document.getElementById('clave').value = '';
                break;
            case 1:
                location.href = "../Principal/Inicio.aspx";

                break;
            case 4:
                document.getElementById("lblmensaje").innerHTML = "Usuario inactivo";

                break;
            case 5:
                document.getElementById("lblmensaje").innerHTML = "Usuario o contraseña incorrectos";

                break;

        }
    } catch (elError) {
    }
}

function validarLogin(key) {

    if (key.key == "Enter") {
        login();
    }

}