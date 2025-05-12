let pazim1 = 6
let pazim2 = 3
let pazim3 = 9
let vidurkis = (pazim1 + pazim2 + pazim) / 3;
    console.log("Pažymių vidurkis:", vidurkis.toFixed(2));
if (vidurkis >= 8 && vidurkis <= 10) {
    console.log("Vidurkis yra tarp 8 ir 10 (imtinai).");
} else if (vidurkis >= 5 && vidurkis < 8) {
    console.log("Vidurkis yra tarp 5 (imtinai) ir 8 (neimtinai).");
} else if (vidurkis < 5) {
    console.log("Vidurkis mažesnis nei 5.");
} else {
    console.log("Įvesti neteisingi duomenys.");
}