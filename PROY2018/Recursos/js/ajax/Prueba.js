var host = "driver.cloudmqtt.com";
var port = 38753;

$(document).ready(function () {

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

    


    setTimeout(subscripciones, 5000);
});

function subscripciones() {
    client.subscribe("IoTenergy/eficiencia");
    //client.subscribe("ardu/SJA/temp1");
    //client.subscribe("ardu/SJA/temp2");
    //client.subscribe("ardu/SJA/temp3");
    //client.subscribe("ardu/SJA/hum1");

    client.subscribe("IoT/SJA/temptres");
    client.subscribe("IoT/SJA/tempdos");
    client.subscribe("IoT/SJA/humedad");
    client.subscribe("IoT/SJA/temp1");

    client.subscribe("MQTT_RT_DATA");
    client.subscribe("MQTT_ENY_NOW");
   
}


function onMessageArrived(msg) {
    out_msg = "Message received" + msg.payloadString + "<br>";
    out_msg = out_msg + "Message received Topic " + msg.destinationName;
    console.log(out_msg);

    var arrayParameters = new Array();
    arrayParameters.push('mensaje=' + msg.payloadString);
    arrayParameters.push('topic=' + msg.destinationName);
    var send = arrayParameters.join('&');
    $.post('../../Controllers/ctlMensaje.aspx', send, '');
}


//function MQTTconnect() {
//    console.log("connecting to " + host + " " + port);
//    mqtt = new Paho.MQTT.Client(host, port, "191454");
//    var options = {
//        timeout: 3,
//        useSSL: true,
//        userName: "swzunxcp",
//        password: "nx3LK9pd0OR0",
//        onSuccess: onConnect,
//        onFailure: onFailure
//    };
//    mqtt.onMessageArrived = onMessageArrived;

//    mqtt.connect(options);
//}

//function onFailure(message) {
//    console.log("Conection Attempt to host to " + host + " Failed");
//    setTimeout(onConnect, 1000);
//}



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

function EnviarMensaje(message,topic) {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe(topic);
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic;
    client.send(message);
}

function doFail(e) {
    console.log(e);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived2(message) {
    console.log("onMessageArrived:" + message.payloadString);
    client.disconnect();
}
