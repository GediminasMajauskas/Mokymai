// 1 testiniai duomenys
let markoSvoris1 = 78; // kg
let markoUgis1 = 1.69; // m
let dzonoSvoris1 = 92; // kg
let dzonoUgis1 = 1.95; // m

// 2 testiniai duomenys
let markoSvoris2 = 95; // kg
let markoUgis2 = 1.88; // m
let dzonoSvoris2 = 85; // kg
let dzonoUgis2 = 1.76; // m

// Funkcija KMI apskaičiavimui
function apskaiciuotiKMI(svoris, ugis) {
  return svoris / (ugis * ugis);
}

// Apskaičiuoti KMI Markui ir Džonui
let markoKMI1 = apskaiciuotiKMI(markoSvoris1, markoUgis1);
let dzonoKMI1 = apskaiciuotiKMI(dzonoSvoris1, dzonoUgis1);

let markoKMI2 = apskaiciuotiKMI(markoSvoris2, markoUgis2);
let dzonoKMI2 = apskaiciuotiKMI(dzonoSvoris2, dzonoUgis2);

// Sukurti Boolean kintamąjį, kuris tikrins, ar Markas turi didesnį KMI nei Džonas
let markoDidesnisKMI1 = markoKMI1 > dzonoKMI1;
let markoDidesnisKMI2 = markoKMI2 > dzonoKMI2;

// Išvedimas į konsolę
console.log("Testiniai duomenys 1:");
console.log("Marko KMI: " + markoKMI1.toFixed(2));
console.log("Džono KMI: " + dzonoKMI1.toFixed(2));
console.log("Ar Marko KMI didesnis? " + markoDidesnisKMI1);

console.log("\nTestiniai duomenys 2:");
console.log("Marko KMI: " + markoKMI2.toFixed(2));
console.log("Džono KMI: " + dzonoKMI2.toFixed(2));
console.log("Ar Marko KMI didesnis? " + markoDidesnisKMI2);