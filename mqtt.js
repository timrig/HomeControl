var serverParam;
var userParam;
var passwordParam;

function mqttPub(element) {
    const host = serverParam;
    const port = 8884;
    const clientId = 'mqtt_js_' + Math.random().toString(16).substr(2, 8);
    const username = userParam;
    const password = passwordParam;

    const client = new Paho.Client(host, port, clientId);

    client.onConnectionLost = onConnectionLostPub;

    const connectOptions = {
        onSuccess: onConnectPub,
        userName: username,
        password: password,
        useSSL: true,
    };
    function connectPub() {
        client.connect(connectOptions);
    }

    function onConnectPub() {
        console.log('Verbunden zum MQTT Broker');
        var nachricht;
        var topic;
        var abbruch;
        abbruch = false;
        if(element == "rgb") {
            ledRot = document.getElementById("sliderRot").value;
            console.log(ledRot);
            ledGruen = document.getElementById("sliderGruen").value;
            console.log(ledGruen);
            ledBlau = document.getElementById("sliderBlau").value;
            console.log(ledBlau);
            nachricht = ledRot + "," + ledGruen + "," + ledBlau;
            topic = element;
            updateData("sliderRotText",ledRot);
            updateData("sliderGruenText",ledGruen);
            updateData("sliderBlauText",ledBlau);
        }
        else if(element == "timerLEDPub") {
            var zeit = document.getElementById("timerZeit").value;
            topic = element;
            if(document.getElementById("timer4h").checked) {
                nachricht = zeit + ",4";
                document.getElementById("timerEinstellung").innerHTML = zeit + " | 4h";
                updateData("timerEinstellung",zeit + " | 4h");
            }
            else if(document.getElementById("timer6h").checked) {
                nachricht = zeit + ",6";
                document.getElementById("timerEinstellung").innerHTML = zeit + " | 6h";
                updateData("timerEinstellung",zeit + " | 6h");
            }
            else if(!document.getElementById("timer4h").checked && !document.getElementById("timer6h").checked) {
                abbruch = true;
                alert("Wähle ein Intervall aus!");
            }
        }
        else if(element.id === "serverBackup") {
            nachricht = "on";
            topic = element.id;
            let zeit = new Date();
            let jahr = zeit.getFullYear();
            let monat = zeit.getMonth() + 1;
            let tag = zeit.getDate();
            let stunde = zeit.getHours();
            let minute = zeit.getMinutes();
            let datum = tag + "." + monat + "." + jahr + " - " + stunde + ":" + minute;
            document.getElementById("serverEinstellung").innerHTML = datum;
            updateData("serverEinstellung",datum);
        }
        else if(element.checked || element.tagName.toLowerCase() === "button") {
            if(element.id == "ledHome") {
                ledRot = "255";
                ledGruen = "32";
                ledBlau = "0";
                document.getElementById("sliderRotText").innerHTML = ledRot;
                document.getElementById("sliderGruenText").innerHTML = ledGruen;
                document.getElementById("sliderBlauText").innerHTML = ledBlau;
                document.getElementById("sliderRot").value = ledRot;
                document.getElementById("sliderGruen").value = ledGruen;
                document.getElementById("sliderBlau").value = ledBlau;
                updateData("sliderRotText",ledRot);
                updateData("sliderGruenText",ledGruen);
                updateData("sliderBlauText",ledBlau);
            }
            nachricht = "on";
            topic = element.id;
            if(topic != "ledSubmit") updateData(topic,true);
        }
        else if(element.checked === false) {
            nachricht = "off";
            topic = element.id;
            updateData(topic,false);
        }
        if(abbruch == false) {
            client.publish("home/" + topic, nachricht)
        }
        else abbruch = false;
    }

    function onConnectionLostPub(responseObject) {
        if (responseObject.errorCode !== 0) {
        console.log('Verbindung verloren: ' + responseObject.errorMessage);
        }
    }
    connectPub();
}

function mqttSub() {
    const host = serverParam;
    const port = 8884;
    const clientId = 'mqtt_js_' + Math.random().toString(16).substr(2, 8);
    const username = userParam;
    const password = passwordParam;

    const client = new Paho.Client(host, port, clientId);

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    const connectOptions = {
        onSuccess: onConnect,
        userName: username,
        password: password,
        useSSL: true,
    };

    function connect() {
        client.connect(connectOptions);
    }

    function onConnect() {
        console.log("Verbunden zum MQTT Broker");
        isConnected = true;
        client.subscribe("home/esp32/#");
    }

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            isConnected = false;
            console.log("Verbindung verloren: " + responseObject.errorMessage);
            // Versuche alle 5 Sekunden eine erneute Verbindung
            setTimeout(connect, 5000);
        }
    }

    function onMessageArrived(message) {
        console.log('Nachricht empfangen - Topic: ' + message.destinationName + ', Nachricht: ' + message.payloadString);
        const messageArray = message.payloadString.split(",");
        if(messageArray[1] == "on") updateData(messageArray[0],true);
        else if(messageArray[1] == "off") updateData(messageArray[0],false);
    }
    connect();
}