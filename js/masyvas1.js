let pirkiniai = ['Duona', 'Pienas', 'Suris', 'Sviestas', 'Desra']
console.log ('Pirkiniu kiekis:' + pirkiniai.length);
console.log("Pirkinių sąrašas:");
for (let i = 0; i < pirkiniai.length; i++) {
    console.log("---- " + pirkiniai[i]);
}

console.log ()

let pazymiai = [3, 5, 8, 2, 4, 9, 10]
let suma = 0;
for(let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
}
let vidurkis = suma / pazymiai.length;
    console.log ('Pazymiai :')
    for (let i = 0; i < pazymiai.length; i++) {
        console.log(" - " + pazymiai[i]);
    }
        console.log('Vidurkis :' + vidurkis)

console.log ()        

let kilom = [77, 55, 280, 132, 164, 39, 900]

for(let i = 0; i < kilom.length; i++) {
    if(kilom[i] > 150) {
    console.log(' - ' + kilom[i] + 'km')
    }
}

console.log () 

let failai = ['external.xlm', 'dokumentas.doc', 'tekstas.txt', 'pavekslas.jpg', 'objektas.json']
for (let i = 0; i < failai.length; i++) {
    if (failai[i].endsWith(".txt") || failai[i].endsWith(".json")) {
        console.log("- " + failai[i]);
    }
}

console.log ()

let auto = ['bmw', 'mersedes', 'lada', 'opel', 'tesla']
for(let i = 0; i < auto.length; i++) {
    let marke = auto[i];
    console.log(' - ' + marke + ' (' + marke.length + ' raidės)');
}

console.log ()
 
let klaiduKodai = ["ui87", "net01", "sys12", "db04", "ui15"];

let klaiduAprasymai = {
    "ui87": "Grafinės sąsajos klaida navigacijoje",
    "ui15": "Grafinės sąsajos mygtuko veikimo klaida",
    "sys12": "Trūksta operatyviosios atminties sistemoje",
    "net01": "Tinklo ryšio klaida",
    "db04": "Duomenų bazės prisijungimo klaida"
};

console.log("Klaidų ataskaita administratoriui:");
for (let i = 0; i < klaiduKodai.length; i++) {
    let kodas = klaiduKodai[i];
    let aprasymas = klaiduAprasymai[kodas];
    if (aprasymas) {
        console.log("- " + kodas + ": " + aprasymas);
    }
}

console.log ()

let likuciai = [74, 54, 32, 100, 50];
const perDiena = 5;
console.log("Sandėlio likučių analizė:");
for (let i = 0; i < likuciai.length; i++) {
    let kiekis = likuciai[i];
    let dienos = Math.ceil(kiekis / perDiena);
    console.log("- " + kiekis + " vnt. prekės užteks maždaug " + dienos + " dienų");
}

console.log ()

let pazymiai2 = [];
for (let i = 0; i < 10; i++) {
    let atsitiktinisPazymys = Math.floor(Math.random() * 10) + 1; // nuo 1 iki 10
    pazymiai2.push(atsitiktinisPazymys);
}
let suma2 = 0;
let neigiamuKiekis = 0;
let teigiamiPazymiai = [];

for (let i = 0; i < pazymiai2.length; i++) {
    let pazymys = pazymiai2[i];
    suma2 += pazymys;

    if (pazymys < 5) {
        neigiamuKiekis++;
    } else {
        teigiamiPazymiai.push(pazymys);
    }
}

let vidurkis2 = suma2 / pazymiai2.length;

// Išvedimas
console.log("Sugeneruoti pažymiai:", pazymiai2.join(", "));
console.log("Teigiami pažymiai:", teigiamiPazymiai.join(", "));
console.log("Vidurkis:", vidurkis2.toFixed(2));
console.log("Neigiamų pažymių kiekis:", neigiamuKiekis);