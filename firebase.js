const firebaseConfig = {
    apiKey: dbParam,
    authDomain: "mfstreethomecontrol.firebaseapp.com",
    databaseURL: "https://mfstreethomecontrol-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mfstreethomecontrol",
    storageBucket: "mfstreethomecontrol.appspot.com",
    messagingSenderId: "183933029539",
    appId: "1:183933029539:web:872fb791b7fcc4384ec316",
    measurementId: "G-H3TFD0TQGT"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
const ref = database.ref('Zustaende');

ref.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    if(data.esstisch==true) document.getElementById("esstisch").checked=true;
    if(data.esstisch==false) document.getElementById("esstisch").checked=false;

    if(data.sideboard==true) document.getElementById("sideboard").checked=true;
    if(data.sideboard==false) document.getElementById("sideboard").checked=false;

    if (data.kueche1 === true) document.getElementById("kueche1").checked = true;
    if (data.kueche1 === false) document.getElementById("kueche1").checked = false;

    if (data.kueche2 === true) document.getElementById("kueche2").checked = true;
    if (data.kueche2 === false) document.getElementById("kueche2").checked = false;

    if (data.ledEsstisch === true) document.getElementById("ledEsstisch").checked = true;
    if (data.ledEsstisch === false) document.getElementById("ledEsstisch").checked = false;

    if (data.ledTV === true) document.getElementById("ledTV").checked = true;
    if (data.ledTV === false) document.getElementById("ledTV").checked = false;

    if (data.lichterkette === true) document.getElementById("lichterkette").checked = true;
    if (data.lichterkette === false) document.getElementById("lichterkette").checked = false;

    if (data.serverPower === true) document.getElementById("serverPower").checked = true;
    if (data.serverPower === false) document.getElementById("serverPower").checked = false;

    if (data.stehlampeSZ === true) document.getElementById("stehlampeSZ").checked = true;
    if (data.stehlampeSZ === false) document.getElementById("stehlampeSZ").checked = false;

    if (data.stehlampeWZ === true) document.getElementById("stehlampeWZ").checked = true;
    if (data.stehlampeWZ === false) document.getElementById("stehlampeWZ").checked = false;

    if (data.timer === true) document.getElementById("timer").checked = true;
    if (data.timer === false) document.getElementById("timer").checked = false;

    if (data.treibholz === true) document.getElementById("treibholz").checked = true;
    if (data.treibholz === false) document.getElementById("treibholz").checked = false;

    document.getElementById("sliderRotText").innerHTML = data.sliderRotText;
    document.getElementById("sliderGruenText").innerHTML = data.sliderGruenText;
    document.getElementById("sliderBlauText").innerHTML = data.sliderBlauText;
    document.getElementById("timerEinstellung").innerHTML = data.timerEinstellung;
    document.getElementById("serverEinstellung").innerHTML = data.serverEinstellung;
    document.getElementById("sliderRot").value = data.sliderRotText;
    document.getElementById("sliderGruen").value = data.sliderGruenText;
    document.getElementById("sliderBlau").value = data.sliderBlauText;
});

function updateData(attribute,zustand) {
    const ref = database.ref('Zustaende/' + attribute);

    if(attribute == "timerEinstellung" || attribute == "serverEinstellung") {
        ref.set(zustand)
        .then(() => {
            console.log(`Wert für ${attribute} wurde erfolgreich aktualisiert.`);
        })
        .catch((error) => {
            console.error(`Fehler beim Aktualisieren des Werts für ${attribute}: ${error}`);
        });
    }

    else if(attribute == "sliderRotText" || attribute == "sliderGruenText" || attribute == "sliderBlauText") {
        ref.set(zustand)
        .then(() => {
            console.log(`Wert für ${attribute} wurde erfolgreich aktualisiert.`);
        })
        .catch((error) => {
            console.error(`Fehler beim Aktualisieren des Werts für ${attribute}: ${error}`);
        });
    }
    
    else if(zustand==true) {
        ref.set(true)
        .then(() => {
            console.log(`Wert für ${attribute} wurde erfolgreich aktualisiert.`);
        })
        .catch((error) => {
            console.error(`Fehler beim Aktualisieren des Werts für ${attribute}: ${error}`);
        });
    }

    else if(zustand==false) {
        ref.set(false)
        .then(() => {
            console.log(`Wert für ${attribute} wurde erfolgreich aktualisiert.`);
        })
        .catch((error) => {
            console.error(`Fehler beim Aktualisieren des Werts für ${attribute}: ${error}`);
        });
    }

  }