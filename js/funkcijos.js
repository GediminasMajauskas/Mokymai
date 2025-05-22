function pristatymas() {
    console.log("Mano vardas GM .");
    console.log("Programavimas patinka");
  }
  
  pristatymas();
  pristatymas();
  pristatymas();

  console.log('++++++++++++++++++++++++')

  function eilerastis (){

    console.log('pirma eilute');
    console.log('antara eilute');
    console.log('trecia eilute');
    console.log('ketvira eilute');
    console.log('penkta eilute');
}
for (let i = 0; i < 3; i++) {
  eilerastis();
}

console.log('++++++++++++++++++++++++')

function vardas() {
    console.log('G.M')
}
function kodas() {
    console.log('ID-6789')
}
function teises() {
    console.log('Admin')
}
vardas()
kodas()
teises()


console.log('++++++++++++++++++++++++')


function pirmasF() {
    console.log("Pirma funkcija");
}
  
function antrasF() {
    console.log("Antra funkcija");
}
  
function iskvieskAbi() {
    pirmasF();
    antrasF();
}
    iskvieskAbi();

  console.log('++++++++++++++++++++++++')

  function atsitiktineSuma() {
    let skaicius1 = Math.floor(Math.random() * 1000) + 1;
    let skaicius2 = Math.floor(Math.random() * 1000) + 1;
    let suma = skaicius1 + skaicius2;
  
    console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
  }
  
  atsitiktineSuma();
  atsitiktineSuma();
  atsitiktineSuma();
  atsitiktineSuma();
  
console.log('++++++++++++++++++++++++')
 
function pasisveikinimas(vardaskint) {
    console.log("Labas, " + vardaskint);
  }
  
   function atsisveikinimas(vardaskint) {
    console.log("Viso gero, " + vardaskint);
  }
  
  
  let vardaskint = "Jonas";
  
  
  pasisveikinimas(vardaskint);
  atsisveikinimas(vardaskint);

  console.log('++++++++++++++++++++++++')  

  function palygintiSkaicius(skaicius1, skaicius2) {
    if (skaicius1 > skaicius2) {
      console.log(`${skaicius1} yra didesnis už ${skaicius2}`);
    } else if (skaicius2 > skaicius1) {
      console.log(`${skaicius2} yra didesnis už ${skaicius1}`);
    } else {
      console.log(`Skaičiai yra lygūs: ${skaicius1} = ${skaicius2}`);
    }
  }
  
  palygintiSkaicius(5, 9);
  palygintiSkaicius(12, 4);
  palygintiSkaicius(7, 7);

console.log('lllllllllllllllllllllllllllll')

function automobilis(marke, modelis, metai, turis) {
  console.log(`Markė: ${marke}`);
  console.log(`Modelis: ${modelis}`);
  console.log(`Gamybos metai: ${metai}`);
  console.log(`Darbinis tūris: ${turis} litrai`);
  console.log(`_______________________________`);
}
automobilis("Toyota", "Corolla", 2015, 1.6);
automobilis("BMW", "X5", 2020, 3.0);
automobilis("Opel", "Askona", 2000, 1.0);
automobilis("MB", "GTA", 2020, 5.0);

console.log('********************************')

function suma(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
  }
  
  function skirtumas(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
  }
  
  function sandauga(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
  }
  
  function dalmuo(a, b) {
    if (b !== 0) {
      console.log(`${a} / ${b} = ${a / b}`);
    }
  }
  
  function atlikVeiksmus() {
    const sk1 = Math.floor(Math.random() * 100) + 1;
    const sk2 = Math.floor(Math.random() * 10) + 1;
  
    console.log(`Generuoti skaiciai: ${sk1} ir ${sk2}`);
    console.log('~~~~~~~~~~~~~~~~~~')
    suma(sk1, sk2);
    skirtumas(sk1, sk2);
    sandauga(sk1, sk2);
    dalmuo(sk1, sk2);
  }
  
  atlikVeiksmus();
  atlikVeiksmus();
  atlikVeiksmus();

  console.log('++++++++++++++++++++++')

function isvedam(zodziai) {
    for (let i = 0; i < zodziai.length; i++) {
      const zodis = zodziai[i];
      console.log(`${zodis} (${zodis.length} simboliai)`);
    }
  }
  let manoZodziai = ["labas", "kompiuteris", "katė", "programavimas", "sveikas"];
  
  isvedam(manoZodziai);



 
function PrintSkaicius(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
      const skaicius = masyvas[i];
      const kvadratas = skaicius * skaicius;
      const padalinta = skaicius * skaicius / 2;
  
      console.log(`Skaičius: ${skaicius}, Kvadratas: ${kvadratas}, Kvadratas/2 = ${padalinta}`);
    }
  }
  const masyvas1 = [23,47,69,82];
  const masyvas2 = [10, 30, 50, 70, 90];
  const masyvas3 = [50, 45, 567, 89, 123];
  const masyvas4 = [456, 789, 12, 34, 67];
  
  console.log("Masyvas 1");
  PrintSkaicius(masyvas1);
  console.log("Masyvas 2");
  PrintSkaicius(masyvas2);
  console.log("Masyvas 3");
  PrintSkaicius(masyvas4);
  console.log("Masyvas 4");
  PrintSkaicius(masyvas4);

  console.log('xxxxxxxxxxxxxxxxxxxxxxxx')

  function studentas(vardas, pavarde, pazymiai) {
    console.log(`Studentas: ${vardas} ${pavarde}`);
    console.log(`Pažymiai: ${pazymiai.join(", ")}`);
  
   
    let suma = 0;
    for (let i = 0; i < pazymiai.length; i++) {
      suma += pazymiai[i];
    }
    const vidurkis = suma / pazymiai.length;
    console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);
    console.log('------------------------');
  }
  
  const vardas1 = "Jonas";
  const pavarde1 = "Jonaitis";
  const pazymiai1 = [8, 9, 10, 7, 6];
  
  const vardas2 = "Ona";
  const pavarde2 = "Oniene";
  const pazymiai2 = [9, 9, 10, 10, 8];
  
  studentas(vardas1, pavarde1, pazymiai1);
  studentas(vardas2, pavarde2, pazymiai2);

  console.log("zzzzzzzzzzzzzzzzzzzzzzz")

  function studentai(vardas, pavarde, pazymiai) {
    console.log(`Studentas: ${vardas} ${pavarde}`);
    console.log(`Pažymiai: ${pazymiai.join(", ")}`);
  }
  let vardas3 = "Jonas";
  let pavarde3 = "Jonaitis";
  let pazymiai3 = [8, 9, 10, 3, 5, 9, 2];

  studentai(vardas3, pavarde3, pazymiai3);

  console.log('666666666666666666666666')

  