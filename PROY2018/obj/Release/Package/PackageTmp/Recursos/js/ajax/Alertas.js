/*script alertas*/ 
var fecha = new Date();
var idAlertaGlobal=-1;
var pagGlobal=0;
$(document).ready(function () {

    Empresas_cargar();
    Desigualdad_cargar();
    IntervaloTiempo_cargar();
    //google.charts.setOnLoadCallback(drawStuff);

    $('.selectBuscar').select2();


    fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    cambiarPestanna(pestanas, pestana1);
    //document.getElementById("txtDesde").value = fecha;
    //document.getElementById("txtHasta").value = fecha;

    //$.noConflict();
    //$("#txtDesde").datepicker();
});

////////////FUNCIONES CARGAR SELECT///////////////////
////////////FUNCIONES CARGAR SELECT///////////////////
////////////FUNCIONES CARGAR SELECT///////////////////

function Empresas_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Empresas_cargar');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Empresas_cargar_response);
}

function Empresas_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("selEmpresa", info.data);
        }
        
    }
    catch (elError) {
    }

    Equipos_cargar();
}


function IntervaloTiempo_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Select_cargar');
    arrayParameters.push('categoria=6');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, IntervaloTiempo_cargar_response);
}

function IntervaloTiempo_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("SelIntervaloTiempo", info.data);
        }
    }
    catch (elError) {
    }
}



function Desigualdad_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Select_cargar');
    arrayParameters.push('categoria=5');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Desigualdad_cargar_response);
}

function Desigualdad_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("SelDiasSemana", info.data);
            cargarSelect("selDesigualdad", info.data);
        }
    }
    catch (elError) {
    }
}


function Equipos_cargar() {

    var empresa = document.getElementById("selEmpresa").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=Equipos_cargar');
    arrayParameters.push('empresa=' + empresa);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Equipos_cargar_response);
}

function Equipos_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("selEquipo1", info.data);
            cargarSelect("selEquipo2", info.data);
        }
    }
    catch (elError) {
    }

    variables_cargar(1);
    variables_cargar1(1);
}


function variables_cargar() {

    var equipo1 = document.getElementById("selEquipo1").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=Variables_cargar');
    arrayParameters.push('canal=-1');
    arrayParameters.push('equipoId=' + equipo1);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, variables_cargar_response);
}

function variables_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("selParametro1", info.data);
        }
    }
    catch (elError) {
    }

    setTimeout(Alertas_listar, 800);
}


function variables_cargar1() {

    var equipo1 = document.getElementById("selEquipo2").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=Variables_cargar');
    arrayParameters.push('canal=-1');
    arrayParameters.push('equipoId=' + equipo1);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, variables_cargar1_response);
}

function variables_cargar1_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("selParametro2", info.data);
        }
    }
    catch (elError) {
    }

}


/******************************************** */
/************************1ra pestaña******** */
/******************************************** */
function Alertas_listar() {

    //document.getElementById("divGraf1").innerHTML = "";

    var empresa = document.getElementById("selEmpresa").value;
    var equipoId = document.getElementById("selEquipo1").value;
    var variable = '-1';// document.getElementById("selParametro1").value;
    var fechaIni = document.getElementById("txtDesde").value;
    var fechaFin = document.getElementById("txtHasta").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=AlertasMediciones_listar');
    arrayParameters.push('empresa=' + empresa);
    arrayParameters.push('equipoId=' + equipoId);
    arrayParameters.push('variable=' + variable);
    arrayParameters.push('fechaIni=' + fechaIni);
    arrayParameters.push('fechaFin=' + fechaFin);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Alertas_listar_response);
}

function Alertas_listar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            var datosArray = new Array();
            var table = '<table id="dataTable1" class="datatable table"><tr><th>FECHA</th><th>EQUIPO</th><th>VARIABLE</th><th>DATO</th><th>LÍMITE</th></tr>';

            for (var i = 0; i < datosRows.length; i += l) {
                var equi_med_id = datosRows[i];
                var equi_id = datosRows[i + 1];
                var equi_nombre = datosRows[i + 2];
                var var_id = datosRows[i + 3];
                var var_nombre = datosRows[i + 4];
                var valor = datosRows[i + 5];
                var fecha = datosRows[i + 6];
                var valor_lim = datosRows[i + 7];
                var igualdad_id = datosRows[i + 8];
                var igualdad_nombre = datosRows[i + 9];


                table += '<tr>';
                table += '<td>' + fecha + '</td>';
                table += '<td>' + equi_nombre + '</td>';
                table += '<td>' + var_nombre + '</td>';
                table += '<td>' + valor + '</td>';
                table += '<td>' + igualdad_nombre + ' ' + valor_lim+'</td>';
                table += '</tr>';

            }
            table += '</table>';
            document.getElementById("divListadoDatos").innerHTML = table;

        } else {
        }

    }
    catch (elError) {
    }
}



/******************************************** */
/************************2da pestaña******** */
/******************************************** */
function AlertasAdministracion_listar(pag) {
    pagGlobal = pag;
    //document.getElementById("divGraf1").innerHTML = "";
    idAlertaGlobal = '-1';
    var empresa = document.getElementById("selEmpresa").value;
    //var equipoId = document.getElementById("selEquipo2").value;
    //var variable = '-1';// document.getElementById("selParametro1").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=AlertasCreadas_listar');
    arrayParameters.push('alerta_id=-1');
    arrayParameters.push('empresa=' + empresa);
    arrayParameters.push('equipoId=-1');
    arrayParameters.push('variable=-1');
    arrayParameters.push('pag=' + pag);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, AlertasAdministracion_listar_response);
}

function AlertasAdministracion_listar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            var datosArray = new Array();
            var table = '<table id="dataTable1" class="datatable table"><tr><th>EQUIPO</th><th>VARIABLE</th><th>INTERVALO</th><th>VALIDACIÓN</th><th>EDITAR</th><th>ELIMINAR</th></tr>';

            var paginaTotal = datosRows[11];

            for (var i = 0; i < datosRows.length; i += l) {
                var alert_id = datosRows[i];
                var equi_id = datosRows[i + 1];
                var equi_nombre = datosRows[i + 2];
                var var_id = datosRows[i + 3];
                var var_nombre = datosRows[i + 4];
                var desigualdad_id = datosRows[i + 5];
                var desigualdad_nombre = datosRows[i + 6];
                var desigualdad_signo = datosRows[i + 7];
                var valor = datosRows[i + 8];
                var intervalo_id = datosRows[i + 9];
                var intervalo_nombre = datosRows[i + 10];


                table += '<tr>';
                table += '<td>' + equi_nombre + '</td>';
                table += '<td>' + var_nombre + '</td>';
                table += '<td>' + intervalo_nombre + '</td>';
                table += '<td>' + desigualdad_signo + ' ' + valor + '</td>';
                table += '<td onclick="EditarAlerta(' + alert_id + ',' + equi_id + ',' + var_id + ',' + desigualdad_id + ',' + valor +');" style="cursor:pointer">editar</td>';
                table += '<td onclick="EliminarAlerta(' + alert_id +');" style="cursor:pointer">eliminar</td>';
                table += '</tr>';

            }
            
            table += '</table>';
            document.getElementById("divListadoAdminAlertas").innerHTML = table;

            document.getElementById("divListadoAdminAlertasPaginador").innerHTML = AdicionarPaginador(pagGlobal, paginaTotal, 'AlertasAdministracion_listar');

        } else {
        }

    }
    catch (elError) {
    }
}

/******************************************** */
/************************funcioón guardar EDITAR ELIMNAR******** */
/******************************************** */

function guardarAlerta() {

    var equipo = document.getElementById("selEquipo2").value;
    var variable = document.getElementById("selParametro2").value;
    var igualacion = document.getElementById("selDesigualdad").value;
    var intervalo = document.getElementById("SelIntervaloTiempo").value;
    var valor = document.getElementById("txtvalor").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=paPRODU_Alertas_guardar');
    arrayParameters.push('id=' + idAlertaGlobal);
    arrayParameters.push('equipo=' + equipo);
    arrayParameters.push('variable=' + variable);
    arrayParameters.push('igualacion=' + igualacion);
    arrayParameters.push('intervalo=' + intervalo);
    arrayParameters.push('valor=' + valor);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, guardarAlerta_response);

}

function EliminarAlerta(id) {

    var arrayParameters = new Array();
    arrayParameters.push('pa=paPRODU_Alertas_eliminar');
    arrayParameters.push('id=' + id);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, guardarAlerta_response);

}

function guardarAlerta_response(res) {
    try {
      
        AlertasAdministracion_listar(1);
    }
    catch (elError) {
    }
}


function EditarAlerta(id, equi_id, var_id, desigualdad_id, valor) {

    idAlertaGlobal = id;

    //document.getElementById("selEquipo2").value = equi_id;
    //document.getElementById("selDesigualdad").value = desigualdad_id;
    document.getElementById("txtvalor").value = valor;
    $('#selParametro2').val(var_id).trigger('change');
    $('#selEquipo2').val(equi_id).trigger('change');
    $('#selDesigualdad').val(desigualdad_id).trigger('change');

}