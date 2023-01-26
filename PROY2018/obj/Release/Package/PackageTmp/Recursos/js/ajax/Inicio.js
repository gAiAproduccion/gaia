var fecha = new Date();
var bnd1Global = 0;
var bnd2Global = 0;

//var infocsvGlobal="a%2Cb%2Cc%0AVal1%2CVal2%2CVal3%0AVal11%2CVal22%2CVal33%0AVal111%2CVal222%2CVal333";;
//var XXX = 'data:application/csv;charset=UTF-8,' + encodeURIComponent(infocsvGlobal);
$(document).ready(function () {

    Empresas_cargar();
    Visualizacion_cargar();
    Resolucion_cargar();
    saludo_cargar();
    //google.charts.setOnLoadCallback(drawStuff);

    $('.selectBuscar').select2();


    fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

    document.getElementById("txtDesde").value = fecha;
    document.getElementById("txtHasta").value = fecha;
    ValidarVariable(1);
    //$.noConflict();
    //$("#txtDesde").datepicker();
});


////////////FUNCIONES CARGAR SELECT///////////////////
////////////FUNCIONES CARGAR SELECT///////////////////
////////////FUNCIONES CARGAR SELECT///////////////////
function Resolucion_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Resolucion_cargar');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Resolucion_cargar_response);
}

function Resolucion_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("selResolucion", info.data);
        }
    }
    catch (elError) {
    }
    document.getElementById("selResolucion").value = 3;
}


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

            cargarSelect("selCanal", info.data);
        }
    }
    catch (elError) {
    }
    //variables_control(2);
    variables_cargar();

}


function Visualizacion_cargar() {

    var arrayParameters = new Array();
    arrayParameters.push('pa=Select_cargar');
    arrayParameters.push('categoria=3');
    var send = arrayParameters.join('&');
    $.post('../../Controllers/Controlador.aspx', send, Visualizacion_cargar_response);
}

function Visualizacion_cargar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            cargarSelect("selVisualizacion", info.data);
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
        }
    }
    catch (elError) {
    }

    //variables_control(1);
    Canal_cargar(document.getElementById("selEquipo1").value);
}


function variables_cargar() {

    var equipo1 = document.getElementById("selEquipo1").value;
    var canal = document.getElementById("selCanal").value;

    var arrayParameters = new Array();
    arrayParameters.push('pa=Variables_cargar');
    arrayParameters.push('canal=' + canal);
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

    setTimeout(EquiposMediciones_listar, 800);
}

//function variables_control(bnd,valor) {
//    if (bnd == 1) {
//        bnd1Global = 1;

//        validarEquipo(valor);
//    }

//    if (bnd == 2) {
//        bnd2Global = 1;
//    }

//    if (bnd1Global == 1 && bnd2Global == 1) {
//        variables_cargar();
//    }
//}


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

function EquiposMediciones_listar() {

    document.getElementById("divGraf1").innerHTML = "";
    document.getElementById("divListadoDatosResumen").innerHTML = "";


    ///falta empresa
    var resolucion = document.getElementById("selResolucion").value;
    var Visualizacion = document.getElementById("selVisualizacion").value;
    var equipoId = document.getElementById("selEquipo1").value;
    var canal = document.getElementById("selCanal").value;
    var variable = document.getElementById("selParametro1").value;
    var fechaIni = document.getElementById("txtDesde").value;
    var fechaFin = document.getElementById("txtHasta").value;

    

    if (Visualizacion == 5) {

        var arrayParameters = new Array();
        arrayParameters.push('pa=EquiposMediciones_listar');
        arrayParameters.push('resolucion=' + resolucion);
        arrayParameters.push('equipoId=' + equipoId);
        arrayParameters.push('variable=' + variable);
        arrayParameters.push('canal=' + canal);
        arrayParameters.push('visualizacion=' + Visualizacion);
        arrayParameters.push('fechaIni=' + fechaIni);
        arrayParameters.push('fechaFin=' + fechaFin);
        var send = arrayParameters.join('&');
        $.post('../../Controllers/Controlador.aspx', send, EquiposMediciones_listar_response);

        var arrayParameters = new Array();
        arrayParameters.push('pa=EquiposMedicionesResumen_listar');
        arrayParameters.push('resolucion=' + resolucion);
        arrayParameters.push('equipoId=' + equipoId);
        arrayParameters.push('variable=' + variable);
        arrayParameters.push('canal=' + canal);
        arrayParameters.push('visualizacion=' + Visualizacion);
        arrayParameters.push('fechaIni=' + fechaIni);
        arrayParameters.push('fechaFin=' + fechaFin);
        var send = arrayParameters.join('&');
        $.post('../../Controllers/Controlador.aspx', send, EquiposMedicionesResumen_listar_response);
    } else {
        var arrayParameters = new Array();
        arrayParameters.push('pa=EquiposMediciones_listar');
        arrayParameters.push('resolucion=' + resolucion);
        arrayParameters.push('equipoId=' + equipoId);
        arrayParameters.push('variable=' + variable);
        arrayParameters.push('canal=' + canal);
        arrayParameters.push('visualizacion=' + Visualizacion);
        arrayParameters.push('fechaIni=' + fechaIni);
        arrayParameters.push('fechaFin=' + fechaFin);
        var send = arrayParameters.join('&');
        $.post('../../Controllers/Controlador.aspx', send, EquiposMedicionesTrifasicos_listar_response);

        var arrayParameters = new Array();
        arrayParameters.push('pa=EquiposMedicionesResumen_listar');
        arrayParameters.push('resolucion=' + resolucion);
        arrayParameters.push('equipoId=' + equipoId);
        arrayParameters.push('variable=' + variable);
        arrayParameters.push('canal=' + canal);
        arrayParameters.push('visualizacion=' + Visualizacion);
        arrayParameters.push('fechaIni=' + fechaIni);
        arrayParameters.push('fechaFin=' + fechaFin);
        var send = arrayParameters.join('&');
        $.post('../../Controllers/Controlador.aspx', send, EquiposMedicionesResumen_listar_response);
    }

    controlCargando(1);
}


function EquiposMediciones_listar_response(res) {
    try {
        controlCargando(2);
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;
            var resolucion = document.getElementById("selResolucion").value;

            var datosArray = new Array();
            var table = '<table id="dataTable1" style="displey:none" class="datatable table"><tr><th>FECHA</th><th>EQUIPO</th><th>VARIABLE</th><th>DATO</th></tr>';

            for (var i = 0; i < datosRows.length; i += l) {
                var equi_id = datosRows[i]
                var completo = datosRows[i + 1];
                var dato = datosRows[i + 2];
                var equipo = datosRows[i + 4];
                var variable = datosRows[i + 5];


                table += '<tr>';
                table += '<td>' + completo + '</td>';
                table += '<td>' + equipo + '</td>';
                table += '<td>' + variable + '</td>';
                table += '<td>' + dato + '</td>';
                table += '</tr>';

                var fecha = ((resolucion == 4) ? completo + "T00:00:00" : completo);
                datosArray.push([new Date(fecha), parseFloat(dato.replace(",", "."))]);
            }
            table += '</table>';
            document.getElementById("divListadoDatos").innerHTML = table;
            document.getElementById("divListadoDatos").style.display = 'none';

            //drawChart1(datosArray);
            google.charts.setOnLoadCallback(drawChart1(datosArray, "divGraf1"));

        } else {
        }

    }
    catch (elError) {
    }
}


function EquiposMedicionesResumen_listar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            var variable = document.getElementById("selParametro1").value;

            if (variable == "1" || variable == "2" || variable == "3") {
                var tipo = 'Acumulado';
            } else {
                var tipo = 'Promedio';
            }

            var datosArray = new Array();
            var table = '<table class="datatable table"><tr><th>Variable</th><th>'+tipo+'</th><th>Máximo</th><th>Mínimo</th></tr>';

            for (var i = 0; i < datosRows.length; i += l) {
                var equi_id = datosRows[i]
                var equi_nombre = datosRows[i + 1];
                var var_id = datosRows[i + 2];
                var var_nombre = datosRows[i + 3];
                var med_tip_id = datosRows[i + 4];
                var med_tip_nombre = datosRows[i + 5];
                var avg = datosRows[i + 6];
                var max = datosRows[i + 7];
                var min = datosRows[i + 8];

                table += '<tr>';
                table += '<td>' + var_nombre + ' - ' + med_tip_nombre+'</td>';
                table += '<td>' + avg + '</td>';
                table += '<td>' + max + '</td>';
                table += '<td>' + min + '</td>';
                table += '</tr>';


            }
            table += '</table>';
            document.getElementById("divListadoDatosResumen").innerHTML = table;

        } else {
        }

    }
    catch (elError) {
    }
}

function drawChart1(datosArray, idDiv) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Sistema');

    data.addRows(datosArray);

    //data.addRows([
    //    [new Date(2015, 0, 1), 5], [new Date(2015, 0, 2), 7], [new Date(2015, 0, 3), 3],
    //    [new Date(2015, 0, 4), 1], [new Date(2015, 0, 5), 3], [new Date(2015, 0, 6), 4],
    //    [new Date(2015, 0, 7), 3], [new Date(2015, 0, 8), 4], [new Date(2015, 0, 9), 2],
    //    [new Date(2015, 0, 10), 5], [new Date(2015, 0, 11), 8], [new Date(2015, 0, 12), 6],
    //    [new Date(2015, 0, 13), 3], [new Date(2015, 0, 14), 3], [new Date(2015, 0, 15), 5],
    //    [new Date(2015, 0, 16), 7], [new Date(2015, 0, 17), 6], [new Date(2015, 0, 18), 6],
    //    [new Date(2015, 0, 19), 3], [new Date(2015, 0, 20), 1], [new Date(2015, 0, 21), 2],
    //    [new Date(2015, 0, 22), 4], [new Date(2015, 0, 23), 6], [new Date(2015, 0, 24), 5],
    //    [new Date(2015, 0, 25), 9], [new Date(2015, 0, 26), 4], [new Date(2015, 0, 27), 9],
    //    [new Date(2015, 0, 28), 8], [new Date(2015, 0, 29), 6], [new Date(2015, 0, 30), 4],
    //    [new Date(2015, 0, 31), 6], [new Date(2015, 1, 1), 7], [new Date(2015, 1, 2), 9]
    //]);

    // Set chart options
    //var options = {
    //    title: 'Rate the Day on a Scale of 1 to 10',
    //    width: 900,
    //    height: 500,
    //    hAxis: {
    //        //format: 'M/d/yy',
    //        gridlines: { count: 15 }
    //    },
    //    vAxis: {
    //        gridlines: { color: 'none' },
    //        minValue: 0
    //    }
    //};

    var options = {
        width: '100%',
        height: 400,
        legend: { position: 'none' },
        textStyle: {
            fontName: 'Times-Roman',
            fontSize: 9
        },
        //enableInteractivity: false,
        chartArea: {
            width: '85%'
        },
        hAxis: {
            //viewwindow: {
            //    min: new date(2014, 11, 31, 18),
            //    max: new date(2015, 0, 3, 1)
            //},
            slantedText: true,
            slantedTextAngle: 70,
            gridlines: {
                units: {
                    days: { format: ['MMM dd'] },
                    hours: { format: ['HH:mm'] },
                }
            },
            minorGridlines: {
                units: {
                    hours: { format: ['HH:mm'] },
                    minutes: { format: ['HH:mm'] }
                }
            },
            textStyle: {
                fontSize: 12
            }

        },
        vAxis: {
            textStyle: {
                fontSize: 12
            }
        }


    };

    // normal  Instantiate and draw our chart, passing in some options.
    //var chart = new google.visualization.LineChart(document.getElementById(idDiv));
    //chart.draw(data, options);

    //material
    var variable = document.getElementById("selParametro1").value;
    if (variable == "1" || variable == "2" || variable == "3") {
        var chart = new google.charts.Bar(document.getElementById('divGraf1'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    } else {
        var chart = new google.charts.Line(document.getElementById('divGraf1'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }

}


function EquiposMedicionesTrifasicos_listar_response(res) {
    try {
        var info = eval('(' + res + ')');
        if (res != '0') {
            var datosRows = info.data;
            var l = info.cols;

            var datosArray = new Array();

            var table = '<table id="dataTable1" style="displey:none" class="datatable"><th>FECHA</th><tr><th>EQUIPO</th><th>VARIABLE</th><th>FASE A</th><th>FASE B</th><th>FASE C</th></tr>';

            for (var i = 0; i < datosRows.length; i += l) {
                var equi_id = datosRows[i]
                var completo = datosRows[i + 1];
                var faseA = datosRows[i + 2];
                var faseB = datosRows[i + 3];
                var faseC = datosRows[i + 4];
                var equipo = datosRows[i + 5];
                var variable = datosRows[i + 6];

                datosArray.push([new Date(completo), parseFloat(faseA.replace(",", ".")), parseFloat(faseB.replace(",", ".")), parseFloat(faseC.replace(",", "."))]);

                table += '<tr>';
                table += '<td>' + completo + '</td>';
                table += '<td>' + equipo + '</td>';
                table += '<td>' + variable + '</td>';
                table += '<td>' + faseA + '</td>';
                table += '<td>' + faseB + '</td>';
                table += '<td>' + faseC + '</td>';
                table += '</tr>';
            }

            table += '</table>';
            document.getElementById("divListadoDatos").innerHTML = table;
            document.getElementById("divListadoDatos").style.display = 'none';

            //drawChart1(datosArray);
            google.charts.setOnLoadCallback(drawChart2(datosArray, "divGraf1"));

        } else {
        }

    }
    catch (elError) {
    }
}


function drawChart2(datosArray, idDiv) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Fase A');
    data.addColumn('number', 'Fase B');
    data.addColumn('number', 'Fase C');

    data.addRows(datosArray);

    var options = {
        width: 1230,
        height: 400,
        legend: { position: 'bottom' },
        //enableInteractivity: false,
        chartArea: {
            width: '85%'
        },
        hAxis: {
            //viewwindow: {
            //    min: new date(2014, 11, 31, 18),
            //    max: new date(2015, 0, 3, 1)
            //},
            slantedText: true,
            slantedTextAngle: 70,
            gridlines: {
                units: {
                    days: { format: ['MMM dd'] },
                    hours: { format: ['HH:mm'] },
                }
            },
            minorGridlines: {
                units: {
                    hours: { format: ['HH:mm'] },
                    minutes: { format: ['HH:mm'] }
                }
            }
        }


    };

    // normal  Instantiate and draw our chart, passing in some options.
    //var chart = new google.visualization.LineChart(document.getElementById(idDiv));
    //chart.draw(data, options);

    //material
    var variable = document.getElementById("selParametro1").value;
    if (variable == "1" || variable == "2" || variable == "3") {
        var chart = new google.charts.Bar(document.getElementById('divGraf1'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    } else {
        var chart = new google.charts.Line(document.getElementById('divGraf1'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }

}

function drawStuff() {

    var dashboard = new google.visualization.Dashboard(
        document.getElementById('programmatic_dashboard_div'));

    // We omit "var" so that programmaticSlider is visible to changeRange.
    var programmaticSlider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'programmatic_control_div',
        'options': {
            'filterColumnLabel': 'Donuts eaten',
            'ui': { 'labelStacking': 'vertical' }
        }
    });

    var programmaticChart = new google.visualization.ChartWrapper({
        'chartType': 'LineChart',
        'containerId': 'programmatic_chart_div',
        'options': {
            'width': 300,
            'height': 300,
            'legend': 'none',
            'chartArea': { 'left': 15, 'top': 15, 'right': 0, 'bottom': 0 },
            'pieSliceText': 'value'
        }
    });

    var data = google.visualization.arrayToDataTable([
        ['Name', 'Donuts eaten'],
        ['Michael', 5],
        ['Elisa', 7],
        ['Robert', 3],
        ['John', 2],
        ['Jessica', 6],
        ['Aaron', 1],
        ['Margareth', 8]
    ]);

    dashboard.bind(programmaticSlider, programmaticChart);
    dashboard.draw(data);

    changeRange = function () {
        programmaticSlider.setState({ 'lowValue': 2, 'highValue': 5 });
        programmaticSlider.draw();
    };

    changeOptions = function () {
        programmaticChart.setOption('is3D', true);
        programmaticChart.draw();
    };
}



function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Rating');

    data.addRows([
        [new Date(2015, 0, 1), 5], [new Date(2015, 0, 2), 7], [new Date(2015, 0, 3), 3],
        [new Date(2015, 0, 4), 1], [new Date(2015, 0, 5), 3], [new Date(2015, 0, 6), 4],
        [new Date(2015, 0, 7), 3], [new Date(2015, 0, 8), 4], [new Date(2015, 0, 9), 2],
        [new Date(2015, 0, 10), 5], [new Date(2015, 0, 11), 8], [new Date(2015, 0, 12), 6],
        [new Date(2015, 0, 13), 3], [new Date(2015, 0, 14), 3], [new Date(2015, 0, 15), 5],
        [new Date(2015, 0, 16), 7], [new Date(2015, 0, 17), 6], [new Date(2015, 0, 18), 6],
        [new Date(2015, 0, 19), 3], [new Date(2015, 0, 20), 1], [new Date(2015, 0, 21), 2],
        [new Date(2015, 0, 22), 4], [new Date(2015, 0, 23), 6], [new Date(2015, 0, 24), 5],
        [new Date(2015, 0, 25), 9], [new Date(2015, 0, 26), 4], [new Date(2015, 0, 27), 9],
        [new Date(2015, 0, 28), 8], [new Date(2015, 0, 29), 6], [new Date(2015, 0, 30), 4],
        [new Date(2015, 0, 31), 6], [new Date(2015, 1, 1), 7], [new Date(2015, 1, 2), 9]
    ]);


    var options = {
        title: 'Rate the Day on a Scale of 1 to 10',
        width: 900,
        height: 500,
        hAxis: {
            format: 'M/d/yy',
            gridlines: { count: 15 }
        },
        vAxis: {
            gridlines: { color: 'none' },
            minValue: 0
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('divGraf1'));

    chart.draw(data, options);

    //    var button = document.getElementById('change');

    //    button.onclick = function () {

    //        // If the format option matches, change it to the new option,
    //        // if not, reset it to the original format.
    //        options.hAxis.format === 'M/d/yy' ?
    //            options.hAxis.format = 'MMM dd, yyyy' :
    //            options.hAxis.format = 'M/d/yy';

    //        chart.draw(data, options);
    //    };
}




function tableToCSV() {

    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var tabla = document.getElementById("dataTable1");
    //var rows = document.getElementsByTagName('tr');
    var rows = $("#dataTable1").find("tr");
    for (var i = 0; i < rows.length; i++) {

        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(";"));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file 
    downloadCSVFile(csv_data);

}

function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "GfG.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}

//function validarEquipo(valor) {
//    if (valor == "SJA") {
//        $('#selCanal').val("2").trigger('change');
//    } else {
//        $('#selCanal').val("1").trigger('change');
//    }
//}

function controlMQTT() {
    client = new Paho.MQTT.Client("driver.cloudmqtt.com", 38753, "191454");
    //Example client = new Paho.MQTT.Client("m11.cloudmqtt.com", 32903, "web_" + parseInt(Math.random() * 100, 10));

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    var options = {
        useSSL: true,
        userName: "swzunxcp",
        password: "nx3LK9pd0OR0",
        onSuccess: onConnect,
        onFailure: doFail
    }

    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect(options);

    //called when the client connects


    setTimeout(subscripciones, 800);
}

function subscripciones() {
    
    client.subscribe("IoT/SJA/OUT1");

}
function controlLed(chk) {

    var topic = "IoT/SJA/OUT1";
    var message = ((chk == true) ? "1" : "0");

    console.log("onConnect");
    //client.subscribe(topic);
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic;
    client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);
    //client.disconnect();
}


function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    /* console.log("onConnect");
     client.subscribe("/cloudmqtt");
     message = new Paho.MQTT.Message("Hello CloudMQTT");
     message.destinationName = "/cloudmqtt";
     client.send(message);
     */
    //   client.subscribe("IoTenergy/eficiencia");
}

function doFail(e) {
    console.log(e);
}


function ValidarVariable(valor) {
    if (valor == 1 || valor == 2 || valor == 3 ) {
        $('#selVisualizacion').val("5").trigger('change');
        $('#selVisualizacion').prop('disabled', true).trigger('change');
    } else {
        document.getElementById("selVisualizacion").disabled = false;
    }
}

