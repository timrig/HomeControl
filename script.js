function fetchKlima() {
    const apiTempWZ = 'https://api.thingspeak.com/channels/1561788/fields/1.json?api_key=VB3J74K24HO3JU2V&results=1';
    const apiLuftWZ = 'https://api.thingspeak.com/channels/1561788/fields/2.json?api_key=VB3J74K24HO3JU2V&results=1';
    const apiTempSZ = 'https://api.thingspeak.com/channels/1563238/fields/1.json?api_key=HFQPK7LE7SVV8KOJ&results=1';
    const apiLuftSZ = 'https://api.thingspeak.com/channels/1563238/fields/2.json?api_key=HFQPK7LE7SVV8KOJ&results=1';
    fetch(apiTempWZ)
      .then(response => response.json())
      .then(data => {
        const lastEntry = data.feeds[0];
        const temperature = lastEntry.field1;
        document.getElementById('tempWZ').textContent = Math.round(temperature*100)/100;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
    fetch(apiLuftWZ)
      .then(response => response.json())
      .then(data => {
        const lastEntry = data.feeds[0];
        const temperature = lastEntry.field2;
        document.getElementById('luftWZ').textContent = Math.round(temperature*100)/100;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
    fetch(apiTempSZ)
      .then(response => response.json())
      .then(data => {
        const lastEntry = data.feeds[0];
        const temperature = lastEntry.field1;
        document.getElementById('tempSZ').textContent = Math.round(temperature*100)/100;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
    fetch(apiLuftSZ)
      .then(response => response.json())
      .then(data => {
        const lastEntry = data.feeds[0];
        const temperature = lastEntry.field2;
        document.getElementById('luftSZ').textContent = Math.round(temperature*100)/100;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
}
setInterval(fetchKlima, 60000);
fetchKlima();

function toggle() {
    document.getElementById("iframeTempWZ").classList.toggle("show");
    document.getElementById("iframeLuftWZ").classList.toggle("show");
    document.getElementById("iframeTempSZ").classList.toggle("show");
    document.getElementById("iframeLuftSZ").classList.toggle("show");
}

var ledRot;
var ledGruen;
var ledBlau;

function updateSlider(element,element2) {
  var slider = element.value;
  console.log(slider);
  var text;
  if(element2=="rot") {
    text = document.getElementById("sliderRotText");
    ledRot = slider;
  }
  else if(element2=="gruen") {
    text = document.getElementById("sliderGruenText");
    ledGruen = slider;
  }
  else if(element2=="blau") {
    text = document.getElementById("sliderBlauText");
    ledBlau = slider;
  }
  text.innerHTML = slider;
}