// Įveskite savo reikšmes čia
let a = 3;
let b = 1;
let c = 5;

// Nustatome rezultatą
let result = "";

if (a < b && a < c && a !== b && a !== c) {
  result = "a";
} else if (b < a && b < c && b !== a && b !== c) {
  result = "b";
} else if (c < a && c < b && c !== a && c !== b) {
  result = "c";
} else {
  result = "Nėra vieno mažiausio ir skirtingo skaičiaus.";
}

// Išvedame į HTML elementą su id="output"
document.getElementById("output").textContent = result;