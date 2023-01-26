$(document).ready(function () {
    saludo_cargar();
});

function saludo_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Saludo_cargar');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, saludo_cargar_response);
}

function saludo_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            document.getElementById("lblSaludo").innerHTML = info.data[0];
        }
    }
    catch (elError) {
    }
}