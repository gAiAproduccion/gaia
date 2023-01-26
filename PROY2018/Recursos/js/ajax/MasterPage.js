



function cerrarSesion() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=paAPP_CerrarSesion_guardar');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/ctlLogin.aspx', send, cerrarSesion_process);
}


function cerrarSesion_process(res) {
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
                location.href = "../Principal/Login.aspx";

                break;


        }
    } catch (elError) {
    }
}


function cargarSelect(idSelect, infoData) {

    limpiarSelect(idSelect);

    select = document.getElementById(idSelect);
    option = document.createElement("option");


    for (var i = 0; i < infoData.length; i = i + 2) {
        option = document.createElement("option");
        option.value = infoData[i];
        option.text = infoData[i + 1];
        select.appendChild(option);
    }
}



function limpiarSelect(idSelect) {

    try {
        while (document.getElementById(idSelect).length > 0) {
            document.getElementById(idSelect).remove(document.getElementById(idSelect).length - 1);
        }
    } catch (elError) {
    }
    //document.getElementById(idSelect).options[0] = new Option('-- SELECCIONE --', '-1');

}

function controlCargando(bnd) {
    if (bnd == 1) {
        $('.submitButton').attr('disabled', true);
    } else {
        $('.submitButton').attr('disabled', false);
    }
}


function AdicionarPaginador(pagina, total, funcion) {
    var table = '<div class="center">';
    table += '<ul class="pagination">';
    table += '<li class="PaginadorTerminales"><a  onclick="' + funcion + '(1)">«</a></li>';
    if (total <= 7) {
        for (var i = 1; i <= total; i++) {

            var pagActiva = ((pagina == i) ? 'class="active"' : '');
            table += '<li><a  ' + pagActiva + ' onclick="' + funcion + '(' + i + ')">' + i + '</a></li>';
        }
    } else {
        if (pagina <= 4) {
            for (var i = 1; i <= 7; i++) {
                var pagActiva = ((pagina == i) ? 'class="active"' : '');
                var puntos = ((i == 7) ? '...' : '');
                table += '<li><a  ' + pagActiva + ' onclick="' + funcion + '(' + i + ')">' + i + puntos + '</a></li>';
            }
        } else if (pagina >= total - 3) {
            for (var i = total - 6; i <= total; i++) {

                var pagActiva = ((pagina == i) ? 'class="active"' : '');
                var puntos = ((i == total - 6) ? '...' : '');
                table += '<li><a  ' + pagActiva + ' onclick="' + funcion + '(' + i + ')">' + puntos + i + '</a></li>';
            }
        } else {
            for (var i = pagina - 3; i <= pagina+3; i++) {

                var pagActiva = ((pagina == i) ? 'class="active"' : '');
                var puntos = ((i == pagina - 3) ? '...' : '');
                var puntos2 = ((i == pagina + 3) ? '...' : '');
                table += '<li><a  ' + pagActiva + ' onclick="' + funcion + '(' + i + ')">' + puntos + i + puntos2+ '</a></li>';
            }
        }
    }

    table += '<li class="PaginadorTerminales"><a  onclick="' + funcion + '(' + total+')">»</a></li></ul></div>';

    return table;
}