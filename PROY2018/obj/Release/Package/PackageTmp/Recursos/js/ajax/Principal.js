$(document).ready(function () {
    //infoBD();
    // openMensaje();
    Estadisticas_listar(1);
    actualizar_alertas();
    datos_listar();

    ParametrosSensores_listar();


    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function () {
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
        //console.log(activeTab);
    });


    controlDivs('selTemp', 1);
    controlDivs('selHumedad', 1);
    controlDivs('selRadiacion', 1);
    controlDivs('selPH', 1);

});

///////////////////////////////////////////VARUABLES GLOBALES
var datosTemperatura = new Array();
var datosHumedad = new Array();
var datosRadiacion = new Array();
var datosPH = new Array();
var datosFecha = new Array();

var datosTemperatura_temp = new Array();
var datosHumedad_temp = new Array();
var datosRadiacion_temp = new Array();
var datosPH_temp = new Array();
var datosFecha_temp = new Array();

var sensorGlobal = "";
var nodoGlobal = "";




function actualizar_alertas() {

    var arrayParameters = new Array();
    arrayParameters.push('p=paPRO_Alertas_guardar');
    arrayParameters.push('id=' + '1');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, actualizar_alertas_processResponse);

}



function actualizar_alertas_processResponse(res) {
    try {
        var info = eval('(' + res + ')');
        var msj = info.msj;
        var datos = info.data;

        switch (msj) {

            case 1:

                document.getElementById("txtFechaIni").value = datos[0];
                document.getElementById("txtFechaFin").value = datos[0];


                Alertas_listar();
                break;

        }



    }
    catch (elError) {
    }
}

function Alertas_listar() {

    var nodo = document.getElementById("selNodo").value;
    var tipo = document.getElementById("selTipoSensor").value;
    var fechaIni = document.getElementById("txtFechaIni").value;
    var fechaFin = document.getElementById("txtFechaFin").value;

    var arrayParameters = new Array();
    arrayParameters.push('p=paPRO_Alertas_listar');
    arrayParameters.push('nodo=' + nodo);
    arrayParameters.push('tipo=' + tipo);
    arrayParameters.push('fechaIni=' + fechaIni);
    arrayParameters.push('fechaFin=' + fechaFin);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Alertas_listar_processResponse);

}

function Alertas_listar_processResponse(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var bnd = true;
            var a = 0;




            var tabla = "<table style='text-align:left' >";
            tabla += '<thead><tr><th>FECHA</th><th>NODO</th><th>SENSOR</th><th>MEDICIÓN</th></tr></thead>';

            tabla += '<tbody>';

            for (var i = 0; i < datosRows.length; i += l) {

                var fecha = datosRows[i];
                var nodo = datosRows[i + 1];
                var sensor = datosRows[i + 2];
                var medicion = datosRows[i + 3];

               


                if (bnd == true) {
                    tabla += '<tr><td>' + fecha + '</td><td>' + nodo + '</td><td>' + sensor + '</td><td>' + medicion + '</td></tr>';
                } else {
                    tabla += '<tr class="alt"><td>' + fecha + '</td><td>' + nodo + '</td><td>' + sensor + '</td><td>' + medicion + '</td></tr>';
                }

                

                bnd = !bnd;



            }


            tabla += '</tbody>';
            tabla += '</table>';
            document.getElementById('divListaAlertas').innerHTML = tabla;



        } else {
            document.getElementById('divListaAlertas').innerHTML = 'NO SE ENCONTRARON DATOS';
        }



    }
    catch (elError) {
    }
}



function datos_listar() {


    var arrayParameters = new Array();
    arrayParameters.push('p=datos_listar');
    arrayParameters.push('id=' + '1');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, datos_listar_processResponse);

    var arrayParameters = new Array();
    arrayParameters.push('p=datos_listar');
    arrayParameters.push('id=' + '2');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, datos_listar_processResponse2);

    var arrayParameters = new Array();
    arrayParameters.push('p=datos_listar');
    arrayParameters.push('id=' + '3');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, datos_listar_processResponse3);

}

function datos_listar_processResponse(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var ctl = true, claseAplicar = "", claseAplicar1 = "", claseAplicar2 = "";
            var a = 0;

            datosTemperatura_temp.length = 0;
            datosHumedad_temp.length = 0;
            datosRadiacion_temp.length = 0;
            datosPH_temp.length = 0;
            datosFecha_temp.length = 0;

            datosTemperatura.length = 0;
            datosHumedad.length = 0;
            datosRadiacion.length = 0;
            datosPH.length = 0;


            var tabla = "<table style='text-align: center; border:2px solid;' class='centrar' ><tr><td colspan='5' align='center'>LISTADO DE PRUEBA</td></tr>";
            tabla += "<tr><td>NÚMERO</td><td>LETRA</td><td>MARCA</td><td>COLOR</td><td>ANIMAL</td></tr>";
            //tabla += "<tr><td class='encabezado' colspan='2'>NOMBRE</td><td class='encabezado'>DETALLE</td><td class='encabezado'>EDITAR</td><td class='encabezado'>ELIMINAR</td></tr>";

            for (var i = 0; i < datosRows.length; i += l) {
                var id = datosRows[i]
                var temp = datosRows[i + 1];
                var humedad = datosRows[i + 2];
                var radiacion = datosRows[i + 3];
                var ph = datosRows[i + 4];
                var fecha = datosRows[i + 5];

                datosTemperatura_temp.push(temp);
                datosHumedad_temp.push(humedad);
                datosRadiacion_temp.push(radiacion);
                datosPH_temp.push(ph);
                datosFecha_temp.push(fecha);

                datosTemperatura.push([datosFecha_temp[a], parseInt(datosTemperatura_temp[a])]);
                datosHumedad.push([datosFecha_temp[a], parseInt(datosHumedad_temp[a])]);
                datosRadiacion.push([datosFecha_temp[a], parseInt(datosRadiacion_temp[a])]);
                datosPH.push([datosFecha_temp[a], parseInt(datosPH_temp[a])]);

                a++;
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);


            }

            drawChartTemp();
            drawChartHumedad();
            drawChartRadiacion();
            drawChartPH();



        } else {
            divTerceros.innerHTML = 'NO SE ENCONTRARON DATOS';
        }



    }
    catch (elError) {
    }
}



function datos_listar_processResponse2(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var ctl = true, claseAplicar = "", claseAplicar1 = "", claseAplicar2 = "";
            var a = 0;

            datosTemperatura_temp.length = 0;
            datosHumedad_temp.length = 0;
            datosRadiacion_temp.length = 0;
            datosPH_temp.length = 0;
            datosFecha_temp.length = 0;

            datosTemperatura.length = 0;
            datosHumedad.length = 0;
            datosRadiacion.length = 0;
            datosPH.length = 0;

            var tabla = "<table style='text-align: center;' BORDER=1 class='centrar' ><tr><td colspan='5' align='center'>LISTADO DE PRUEBA</td></tr>";
            tabla += "<tr><td>NÚMERO</td><td>LETRA</td><td>MARCA</td><td>COLOR</td><td>ANIMAL</td></tr>";
            //tabla += "<tr><td class='encabezado' colspan='2'>NOMBRE</td><td class='encabezado'>DETALLE</td><td class='encabezado'>EDITAR</td><td class='encabezado'>ELIMINAR</td></tr>";

            for (var i = 0; i < datosRows.length; i += l) {
                var id = datosRows[i]
                var temp = datosRows[i + 1];
                var humedad = datosRows[i + 2];
                var radiacion = datosRows[i + 3];
                var ph = datosRows[i + 4];
                var fecha = datosRows[i + 5];

                datosTemperatura_temp.push(temp);
                datosHumedad_temp.push(humedad);
                datosRadiacion_temp.push(radiacion);
                datosPH_temp.push(ph);
                datosFecha_temp.push(fecha);

                datosTemperatura.push([datosFecha_temp[a], parseInt(datosTemperatura_temp[a])]);
                datosHumedad.push([datosFecha_temp[a], parseInt(datosHumedad_temp[a])]);
                datosRadiacion.push([datosFecha_temp[a], parseInt(datosRadiacion_temp[a])]);
                datosPH.push([datosFecha_temp[a], parseInt(datosPH_temp[a])]);

                a++;
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);


            }

            drawChartTemp2();
            drawChartHumedad2();
            drawChartRadiacion2();
            drawChartPH2();



        } else {
            divTerceros.innerHTML = 'NO SE ENCONTRARON DATOS';
        }



    }
    catch (elError) {
    }
}



function datos_listar_processResponse3(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var ctl = true, claseAplicar = "", claseAplicar1 = "", claseAplicar2 = "";
            var a = 0;

            datosTemperatura_temp.length = 0;
            datosHumedad_temp.length = 0;
            datosRadiacion_temp.length = 0;
            datosPH_temp.length = 0;
            datosFecha_temp.length = 0;

            datosTemperatura.length = 0;
            datosHumedad.length = 0;
            datosRadiacion.length = 0;
            datosPH.length = 0;


            var tabla = "<table style='text-align: center;' BORDER=1 class='centrar' ><tr><td colspan='5' align='center'>LISTADO DE PRUEBA</td></tr>";
            tabla += "<tr><td>NÚMERO</td><td>LETRA</td><td>MARCA</td><td>COLOR</td><td>ANIMAL</td></tr>";
            //tabla += "<tr><td class='encabezado' colspan='2'>NOMBRE</td><td class='encabezado'>DETALLE</td><td class='encabezado'>EDITAR</td><td class='encabezado'>ELIMINAR</td></tr>";

            for (var i = 0; i < datosRows.length; i += l) {
                var id = datosRows[i]
                var temp = datosRows[i + 1];
                var humedad = datosRows[i + 2];
                var radiacion = datosRows[i + 3];
                var ph = datosRows[i + 4];
                var fecha = datosRows[i + 5];

                datosTemperatura_temp.push(temp);
                datosHumedad_temp.push(humedad);
                datosRadiacion_temp.push(radiacion);
                datosPH_temp.push(ph);
                datosFecha_temp.push(fecha);

                datosTemperatura.push([datosFecha_temp[a], parseInt(datosTemperatura_temp[a])]);
                datosHumedad.push([datosFecha_temp[a], parseInt(datosHumedad_temp[a])]);
                datosRadiacion.push([datosFecha_temp[a], parseInt(datosRadiacion_temp[a])]);
                datosPH.push([datosFecha_temp[a], parseInt(datosPH_temp[a])]);

                a++;
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);
                //datosTemperatura.push([datosTemperatura_temp[a], datosTemperatura_temp[a + 1]]);


            }

            drawChartTemp3();
            drawChartHumedad3();
            drawChartRadiacion3();
            drawChartPH3();


        } else {
            divTerceros.innerHTML = 'NO SE ENCONTRARON DATOS';
        }



    }
    catch (elError) {
    }
}

function drawChartTemp() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosTemperatura);

    // Set chart options
    var options = {
        'title': 'TEMPERATURA',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divTemp1'));
    chart.draw(data, options);

    datosTemperatura.length = 0;
    datosTemperatura_temp.length = 0;
}


function drawChartHumedad() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosHumedad);

    // Set chart options
    var options = {
        'title': 'HUMEDAD',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divHumedad1'));
    chart.draw(data, options);

    datosHumedad.length = 0;
    datosHumedad_temp.length = 0;
}

function drawChartRadiacion() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosRadiacion);

    // Set chart options
    var options = {
        'title': 'RADIACIÓN',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divRadiacion1'));
    chart.draw(data, options);

    datosRadiacion.length = 0;
    datosRadiacion_temp.length = 0;
}

function drawChartPH() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosPH);

    // Set chart options
    var options = {
        'title': 'pH',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divPH1'));
    chart.draw(data, options);

    datosPH.length = 0;
    datosPH_temp.length = 0;
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////NODO 2/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


function drawChartTemp2() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosTemperatura);

    // Set chart options
    var options = {
        'title': 'TEMPERATURA',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divTemp2'));
    chart.draw(data, options);

    datosTemperatura.length = 0;
    datosTemperatura_temp.length = 0;
}


function drawChartHumedad2() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosHumedad);

    // Set chart options
    var options = {
        'title': 'HUMEDAD',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divHumedad2'));
    chart.draw(data, options);

    datosHumedad.length = 0;
    datosHumedad_temp.length = 0;
}

function drawChartRadiacion2() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosRadiacion);

    // Set chart options
    var options = {
        'title': 'RADIACIÓN',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divRadiacion2'));
    chart.draw(data, options);

    datosRadiacion.length = 0;
    datosRadiacion_temp.length = 0;
}

function drawChartPH2() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosPH);

    // Set chart options
    var options = {
        'title': 'pH',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divPH2'));
    chart.draw(data, options);

    datosPH.length = 0;
    datosPH_temp.length = 0;
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////NODO 3/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

function drawChartTemp3() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosTemperatura);

    // Set chart options
    var options = {
        'title': 'TEMPERATURA',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divTemp3'));
    chart.draw(data, options);

    datosTemperatura.length = 0;
    datosTemperatura_temp.length = 0;
}


function drawChartHumedad3() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosHumedad);

    // Set chart options
    var options = {
        'title': 'HUMEDAD',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divHumedad3'));
    chart.draw(data, options);

    datosHumedad.length = 0;
    datosHumedad_temp.length = 0;
}

function drawChartRadiacion3() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosRadiacion);

    // Set chart options
    var options = {
        'title': 'RADIACIÓN',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divRadiacion3'));
    chart.draw(data, options);

    datosRadiacion.length = 0;
    datosRadiacion_temp.length = 0;
}

function drawChartPH3() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'FECHA');
    data.addColumn('number', 'MEDIDA');
    data.addRows(datosPH);

    // Set chart options
    var options = {
        'title': 'pH',
        'width': 1050,
        'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('divPH3'));
    chart.draw(data, options);

    datosPH.length = 0;
    datosPH_temp.length = 0;
}



function ParametrosSensores_listar() {

    var arrayParameters = new Array();
    arrayParameters.push('p=ParametrosSensores_listar');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, ParametrosSensores_listar_processResponse);

}

function ParametrosSensores_listar_processResponse(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var ctl = true, claseAplicar = "", claseAplicar1 = "", claseAplicar2 = "";
            var a = 0;


            var tabla = "<table style='text-align: center;' BORDER=4 class='centrar' ><tr><td colspan='5' align='center'>LISTADO SENSORES</td></tr>";
            tabla += "<tr><td>TIPO SENSOR</td><td>VALOR MÍNIMO</td><td>VALOR MÍNIMO</td><td>MODIFICAR</td></tr>";
            //tabla += "<tr><td class='encabezado' colspan='2'>NOMBRE</td><td class='encabezado'>DETALLE</td><td class='encabezado'>EDITAR</td><td class='encabezado'>ELIMINAR</td></tr>";

            for (var i = 0; i < datosRows.length; i += l) {
                var id = datosRows[i]
                var sensor = datosRows[i + 1];
                var min = datosRows[i + 2];
                var max = datosRows[i + 3];

                tabla += "<tr><td>" + sensor + "</td><td>" + min + "</td><td>" + max + "</td>";
                tabla += '<td><div style="cursor:pointer" onclick="modificar_sensor(' + id + ',\'' + sensor + '\')">Modificar</div></td></tr>';

                if (id == '1') {
                    document.getElementById("txtValorMinTemp").value = min;
                    document.getElementById("txtValorMaxTemp").value = max;
                } else if (id == '2') {
                    document.getElementById("txtValorMinHumedad").value = min;
                    document.getElementById("txtValorMaxHumedad").value = max;
                } else if (id == '3') {
                    document.getElementById("txtValorMinPH").value = min;
                    document.getElementById("txtValorMaxPH").value = max;
                } else if (id == '4') {
                    document.getElementById("txtValorMinRadiacion").value = min;
                    document.getElementById("txtValorMaxRadiacion").value = max;
                }


            }
            tabla += "</table>"
            document.getElementById("divListaParametros").innerHTML = tabla;

        } else {
            document.getElementById("divListaParametros").innerHTML = 'NO SE ENCONTRARON DATOS';
        }



    }
    catch (elError) {
    }
}

function modificar_sensor(id, nombre) {

    document.getElementById("txtValorMin").value = '';
    document.getElementById("txtValorMax").value = '';

    sensorGlobal = id;
    document.getElementById("lblSensor").innerHTML = ' ' + nombre;
    document.getElementById("divParametrizacion").style.display = 'block';
    document.getElementById("divListaParametros").style.display = 'none';
}

function modificar_sensor_cancelar() {
    document.getElementById("divParametrizacion").style.display = 'none';
    document.getElementById("divListaParametros").style.display = 'block';
}



function SensorParam_guardar() {

    var TempMin = document.getElementById("txtValorMinTemp").value;
    var TempMax = document.getElementById("txtValorMaxTemp").value;
    var HumedadMin = document.getElementById("txtValorMinHumedad").value;
    var HumedadMax = document.getElementById("txtValorMaxHumedad").value;
    var PHMin = document.getElementById("txtValorMinPH").value;
    var PHMax = document.getElementById("txtValorMaxPH").value;
    var RadMin = document.getElementById("txtValorMinRadiacion").value;
    var RadMax = document.getElementById("txtValorMaxRadiacion").value;

    var arrayParameters = new Array();
    arrayParameters.push('p=SensorParam_guardar');
    arrayParameters.push('TempMin=' + TempMin);
    arrayParameters.push('TempMax=' + TempMax);
    arrayParameters.push('HumedadMin=' + HumedadMin);
    arrayParameters.push('HumedadMax=' + HumedadMax);
    arrayParameters.push('PHMin=' + PHMin);
    arrayParameters.push('PHMax=' + PHMax);
    arrayParameters.push('RadMin=' + RadMin);
    arrayParameters.push('RadMax=' + RadMax);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, SensorParam_guardar_processResponse);

}

function SensorParam_guardar_processResponse(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            switch (datosRows[0]) {
                case -1:
                    muestraVentana(mensajeErrorConexion);
                    break;
                case 0:
                    // muestraVentana(mensajeSinInformacion);
                    break;
                case "1":
                    openMensaje();
                    ParametrosSensores_listar();
                    modificar_sensor_cancelar();
                    break;

            }
        }

    }
    catch (elError) {
    }
}


function openMensaje() {

    ventana = $(".ventanaMensaje");
    ventana.slideDown("slow");
    ventana.delay(2000)
    ventana.slideUp("fast");

}

function controlDivs(id, value) {

    if (id == 'selTemp') {
        if (value == 1) {
            document.getElementById('divTemp1').style.display = 'block';
            document.getElementById('divTemp2').style.display = 'none';
            document.getElementById('divTemp3').style.display = 'none';
            document.getElementById('lblTemp').innerHTML = "NODO 1";
        } else if (value == 2) {
            document.getElementById('divTemp1').style.display = 'none';
            document.getElementById('divTemp2').style.display = 'block';
            document.getElementById('divTemp3').style.display = 'none';
            document.getElementById('lblTemp').innerHTML = "NODO 2";
        } else {
            document.getElementById('divTemp1').style.display = 'none';
            document.getElementById('divTemp2').style.display = 'none';
            document.getElementById('divTemp3').style.display = 'block';
            document.getElementById('lblTemp').innerHTML = "NODO 3";
        }
    } else if (id == 'selHumedad') {
        if (value == 1) {
            document.getElementById('divHumedad1').style.display = 'block';
            document.getElementById('divHumedad2').style.display = 'none';
            document.getElementById('divHumedad3').style.display = 'none';
            document.getElementById('lblHumedad').innerHTML = "NODO 1";
        } else if (value == 2) {
            document.getElementById('divHumedad1').style.display = 'none';
            document.getElementById('divHumedad2').style.display = 'block';
            document.getElementById('divHumedad3').style.display = 'none';
            document.getElementById('lblHumedad').innerHTML = "NODO 2";
        } else {
            document.getElementById('divHumedad1').style.display = 'none';
            document.getElementById('divHumedad2').style.display = 'none';
            document.getElementById('divHumedad3').style.display = 'block';
            document.getElementById('lblHumedad').innerHTML = "NODO 3";
        }
    } else if (id == 'selPH') {
        if (value == 1) {
            document.getElementById('divPH1').style.display = 'block';
            document.getElementById('divPH2').style.display = 'none';
            document.getElementById('divPH3').style.display = 'none';
            document.getElementById('lblPH').innerHTML = "NODO 1";
        } else if (value == 2) {
            document.getElementById('divPH1').style.display = 'none';
            document.getElementById('divPH2').style.display = 'block';
            document.getElementById('divPH3').style.display = 'none';
            document.getElementById('lblPH').innerHTML = "NODO 2";
        } else {
            document.getElementById('divPH1').style.display = 'none';
            document.getElementById('divPH2').style.display = 'none';
            document.getElementById('divPH3').style.display = 'block';
            document.getElementById('lblPH').innerHTML = "NODO 3";
        }
    } else if (id == 'selRadiacion') {
        if (value == 1) {
            document.getElementById('divRadiacion1').style.display = 'block';
            document.getElementById('divRadiacion2').style.display = 'none';
            document.getElementById('divRadiacion3').style.display = 'none';
            document.getElementById('lblRadiacion').innerHTML = "NODO 1";
        } else if (value == 2) {
            document.getElementById('divRadiacion1').style.display = 'none';
            document.getElementById('divRadiacion2').style.display = 'block';
            document.getElementById('divRadiacion3').style.display = 'none';
            document.getElementById('lblRadiacion').innerHTML = "NODO 2";
        } else {
            document.getElementById('divRadiacion1').style.display = 'none';
            document.getElementById('divRadiacion2').style.display = 'none';
            document.getElementById('divRadiacion3').style.display = 'block';
            document.getElementById('lblRadiacion').innerHTML = "NODO 3";
        }
    }
}





function Estadisticas_listar(nodo) {

    if (nodo == 1) {
        document.getElementById("lblEstaditicas").innerHTML = "NODO 1";
    } if (nodo == 2) {
        document.getElementById("lblEstaditicas").innerHTML = "NODO 2";
    } if (nodo == 3) {
        document.getElementById("lblEstaditicas").innerHTML = "NODO 3";
    }


    var arrayParameters = new Array();
    arrayParameters.push('p=paPRO_Estadisticas_listar');
    arrayParameters.push('nodo=' + nodo);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Estadisticas_listar_processResponse);

}

function Estadisticas_listar_processResponse(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var bnd = true;
            var a = 0;

            
            var tabla = "<table class='centrar GeneratedTable' >";
            tabla += "<thead><tr><th></th><th>TEMPERATURA</th><th>HUMEDAD</th><th>RADIACIÓN</th><th>PH</th></tr></thead>";
            tabla += "<tr><th>Máximo</th>";
            tabla += "<td>" + datosRows[0] + "</td>";
            tabla += "<td>" + datosRows[3] + "</td>";
            tabla += "<td>" + datosRows[6] + "</td>";
            tabla += "<td>" + datosRows[9] + "</td></tr>";
            tabla += "<tr><th>Mínimo</th>";
            tabla += "<td>" + datosRows[1] + "</td>";
            tabla += "<td>" + datosRows[4] + "</td>";
            tabla += "<td>" + datosRows[7] + "</td>";
            tabla += "<td>" + datosRows[10] + "</td></tr>";
            tabla += "<tr><th>Promedio</th>";
            tabla += "<td>" + datosRows[2] + "</td>";
            tabla += "<td>" + datosRows[5] + "</td>";
            tabla += "<td>" + datosRows[8] + "</td>";
            tabla += "<td>" + datosRows[11] + "</td></tr>";

            //var tabla1 = "<table style='text-align:left; ' BORDER=3>";
            //tabla1 += "<tr><td colspan='2'>HUMEDAD</td>";
            //tabla1 += "<tr><td>Máximo</td>";
            //tabla1 += "<td>" + datosRows[3] + "</td></tr>";
            //tabla1 += "<tr><td>Mínimo</td>";
            //tabla1 += "<td>" + datosRows[4] + "</td></tr>";
            //tabla1 += "<tr><td>Promedio</td>";
            //tabla1 += "<td>" + datosRows[5] + "</td></tr>";


            //var tabla2 = "<table style='text-align:left; ' BORDER=3>";
            //tabla2 += "<tr><td colspan='2'>RADIACIÓN</td>";
            //tabla2 += "<tr><td>Máximo</td>";
            //tabla2 += "<td>" + datosRows[6] + "</td></tr>";
            //tabla2 += "<tr><td>Mínimo</td>";
            //tabla2 += "<td>" + datosRows[7] + "</td></tr>";
            //tabla2 += "<tr><td>Promedio</td>";
            //tabla2 += "<td>" + datosRows[8] + "</td></tr>";


            //var tabla3 = "<table style='text-align:left; ' BORDER=3>";
            //tabla3 += "<tr><td colspan='2'>PH</td>";
            //tabla3 += "<tr><td>Máximo</td>";
            //tabla3 += "<td>" + datosRows[9] + "</td></tr>";
            //tabla3 += "<tr><td>Mínimo</td>";
            //tabla3 += "<td>" + datosRows[10] + "</td></tr>";
            //tabla3 += "<tr><td>Promedio</td>";
            //tabla3 += "<td>" + datosRows[11] + "</td></tr>";


            document.getElementById('divEstTemp').innerHTML = tabla;
            //document.getElementById('divEstHumedad').innerHTML = tabla1;
            //document.getElementById('divEstRadiacion').innerHTML = tabla2;
            //document.getElementById('divEstPh').innerHTML = tabla3;
          
          


        } else {
            //document.getElementById('divListaAlertas').innerHTML = 'NO SE ENCONTRARON DATOS';
        }



    }
    catch (elError) {
    }
}

