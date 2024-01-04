    document.getElementById("btnWohnzimmer").style.backgroundColor = "#f5f5f5";
    document.getElementById("btnWohnzimmer").style.color = "#969696";
    document.getElementById("btnSchlafzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnKueche").style.backgroundColor = "#969696";
    document.getElementById("btnServer").style.backgroundColor = "#969696";
    document.getElementById("btnAllesAus").style.backgroundColor = "#969696";
    document.getElementById("btnSchlafzimmer").style.color = "#ffffff";
    document.getElementById("btnKueche").style.color = "#ffffff";
    document.getElementById("btnServer").style.color = "#ffffff";
    document.getElementById("btnAllesAus").style.color = "#ffffff";

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }
      
    serverParam = getParameterByName('server');
    userParam = getParameterByName('user');
    passwordParam = getParameterByName('password');
    dbParam = getParameterByName('db');

    mqttSub();