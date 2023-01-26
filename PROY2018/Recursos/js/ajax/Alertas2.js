/*script alertas*/
var fecha = new Date();
var idAlertaGlobal = -1;
var pagGlobal = 0;
$(document).ready(function () {

    Empresas_cargar();
    Desigualdad_cargar();
    IntervaloTiempo_cargar();
    DiasSemana_cargar();
    TipoAlerta_cargar();
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
function Canal_cargar(equipo) {

    var arrayParameters = new Array();
    arrayParameters.push('pa=CanalxEquipo_cargar');
    arrayParameters.push('equipo=' + equipo);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Canal_cargar_response);
}

function Canal_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("SelCanal", info.data);
        }
    }
    catch (elError) {
    }

}


function TipoAlerta_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Select_cargar');
    arrayParameters.push('categoria=7');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, TipoAlerta_cargar_response);
}

function TipoAlerta_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("SelTipo", info.data);
        }
    }
    catch (elError) {
    }
}

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

            cargarSelect("selDesigualdad", info.data);
        }
    }
    catch (elError) {
    }
}


function DiasSemana_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=DiasSemana_cargar');
    arrayParameters.push('categoria=5');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, DiasSemana_cargar_response);
}

function DiasSemana_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {

            cargarSelect("SelDiasSemana", info.data);
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
    Canal_cargar(document.getElementById("selEquipo1").value);
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
            var table = '<table id="dataTable1" class="datatable table"><tr><th>FECHA</th><th>EQUIPO</th><th>VARIABLE</th><th>DATO</th><th>LÍMITE</th><th>ESTADO</th></tr>';

            for (var i = 0; i < datosRows.length; i += l) {
                var equi_med_id = datosRows[i];
                var equi_id = datosRows[i + 1];
                var equi_nombre = datosRows[i + 2];
                var valor = datosRows[i + 3];
                var fecha = datosRows[i + 4];
                var var_nombre = datosRows[i + 5];
                var igualdad_nombre = datosRows[i + 6];
                var valor_lim = datosRows[i + 7];
                var estado = datosRows[i + 8];

                table += '<tr>';
                table += '<td>' + fecha + '</td>';
                table += '<td>' + equi_nombre + '</td>';
                table += '<td>' + var_nombre + '</td>';
                table += '<td>' + valor + '</td>';
                table += '<td>' + igualdad_nombre + ' ' + valor_lim + '</td>';
                table += '<td>' + estado + '</td>';
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
            var table = '<table id="dataTable1" class="datatable table"><tr><th>EQUIPO</th><th>VARIABLE</th><th>INTERVALO</th><th>VALIDACIÓN</th><th>RANGO HORARIO</th><th>DÍAS SEMANA</th><th>EDITAR</th><th>ELIMINAR</th></tr>';

            var paginaTotal = datosRows[15];

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
                var Rango_hora_ini = datosRows[i + 11];
                var Rango_hora_fin = datosRows[i + 12];
                var DiasSemana= datosRows[i + 13];
                var DiasSemana_id= datosRows[i + 14];


                table += '<tr>';
                table += '<td>' + equi_nombre + '</td>';
                table += '<td>' + var_nombre + '</td>';
                table += '<td>' + intervalo_nombre + '</td>';
                table += '<td>' + desigualdad_signo + ' ' + valor + '</td>';
                table += '<td>' + Rango_hora_ini + ' - '+Rango_hora_fin+'</td>';
                table += '<td>' + DiasSemana + '</td>';
                table += '<td onclick="EditarAlerta(\'' + alert_id + '\',\'' + equi_id + '\',\'' + var_id + '\',\'' + desigualdad_id + '\',\'' + valor + '\',\'' + Rango_hora_ini + '\',\'' + Rango_hora_fin + '\',\'' + DiasSemana_id + '\');" style="cursor:pointer">editar</td>';
                table += '<td onclick="EliminarAlerta(' + alert_id + ');" style="cursor:pointer">eliminar</td>';
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
    var horaDesde = document.getElementById("txthoraDesde").value;
    var horaHasta = document.getElementById("txthoraHasta").value;
    var canal = document.getElementById("SelCanal").value;
    var TipoAlerta = document.getElementById("SelTipo").value;
    var DiasSemana= $('#SelDiasSemana').val(); 

    var arrayParameters = new Array();
    arrayParameters.push('pa=Alertas_guardar');
    arrayParameters.push('id=' + idAlertaGlobal);
    arrayParameters.push('equipo=' + equipo);
    arrayParameters.push('variable=' + variable);
    arrayParameters.push('igualacion=' + igualacion);
    arrayParameters.push('intervalo=' + intervalo);
    arrayParameters.push('valor=' + valor);
    arrayParameters.push('horaDesde=' + horaDesde);
    arrayParameters.push('horaHasta=' + horaHasta);
    arrayParameters.push('canal=' + canal);
    arrayParameters.push('TipoAlerta=' + TipoAlerta);
    arrayParameters.push('DiasSemana=' + DiasSemana);
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

        $('#txtvalor').val('');
        $('#txthoraDesde').val('');
        $('#txthoraHasta').val('');
        $('#SelDiasSemana').val([]);
        $('#SelDiasSemana').trigger('change');
    }
    catch (elError) {
    }
}


function EditarAlerta(id, equi_id, var_id, desigualdad_id, valor,RangoIni,RangoFin,DiasSemana) {

    idAlertaGlobal = id;

    document.getElementById("txtvalor").value = valor;
    document.getElementById("txthoraDesde").value = RangoIni;
    document.getElementById("txthoraHasta").value = RangoFin;
    $('#selParametro2').val(var_id).trigger('change');
    $('#selEquipo2').val(equi_id).trigger('change');
    $('#selDesigualdad').val(desigualdad_id).trigger('change');

    arrayDiasSemana = DiasSemana.split(','); 

    $('#SelDiasSemana').val(arrayDiasSemana);
    $('#SelDiasSemana').trigger('change');

}