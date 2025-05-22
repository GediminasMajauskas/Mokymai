let filmas = {
    pavadinimas: "Siena",
    rezisierius: "Banionis",
    biudžetas: 16000,
    uzdarbis: 56789,
    žanras: "Drama",
    trukmė: 148, // minutėmis
    isleidimoMetai: 1980,
    aktoriai: [
        "Banionis",
        "Mainelyte",
        "Adomaitis",
        "Tapinas",
        "Grazulis"
    ]
};

console.log("Filmo informacija:");
console.log("Pavadinimas:", filmas.pavadinimas);
console.log("Režisierius:", filmas.rezisierius);
console.log("Biudžetas:", filmas.biudžetas, "Eur");
console.log("Uždarbis:", filmas.uzdarbis, "Eur");
console.log("Žanras:", filmas.žanras);
console.log("Trukmė:", filmas.trukmė, "min.");
console.log("Išleidimo metai:", filmas.isleidimoMetai);
console.log("Aktoriai:", filmas.aktoriai.join(", "));

let pelnas = filmas.uzdarbis - filmas.biudžetas;
console.log("Pelnas:", pelnas, "Eur");


console.log("Aktorių kiekis:", filmas.aktoriai.length);


let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let kiekMetu = dabartiniaiMetai - filmas.isleidimoMetai;
console.log("Filmui yra:", kiekMetu, "metai(-ų)");
console.log(dabartiniaiMetai);

console.log('-------------------')

let knyga1 = {
    pavadinimas: "Bedugne",
    autorius: "Petraitis",
    žanras: "Siaubo",
    kaina: 15.30,
    puslapiai: 320,
    skyriai: ["Įžanga", "Atrastas sodas", "Draugystė", "Pasikeitimas", "Viltis"],
    isleidimoMetai: 1980,
    knygyneYra: true
};

let knyga2 = {
    pavadinimas: "Javascript mokymai",
    autorius: "Jonaitis",
    žanras: "Mokslas",
    kaina: 18.50,
    puslapiai: 280,
    skyriai: ["Įvadas", "HTML mokymas", "CSS mokymas", "Pritaikymas", "JS mokymai", "Ateitis"],
    isleidimoMetai: 2022,
    knygyneYra: false

}
console.log("Knyga:", knyga1.pavadinimas, " - Autorius:", knyga1.autorius, " Kaina Eur", knyga1.kaina);
console.log("Knyga:", knyga2.pavadinimas, " - Autorius:", knyga2.autorius, " Kaina Eur", knyga2.kaina);

if (knyga1.puslapiai < knyga2.puslapiai) {
    console.log(`Plonesnė knyga yra: "${knyga1.pavadinimas}" (${knyga1.puslapiai} psl.)`);
} else if (knyga2.puslapiai < knyga1.puslapiai) {
    console.log(`Plonesnė knyga yra: "${knyga2.pavadinimas}" (${knyga2.puslapiai} psl.)`);
} else {
    console.log("Abi knygos turi vienodą puslapių skaičių.");
}
if (knyga1.skyriai.length > knyga2.skyriai.length) {
    console.log(`Daugiau skyrių turi: "${knyga1.pavadinimas}" (${knyga1.skyriai.length} skyriai)`);
} else if (knyga2.skyriai.length > knyga1.skyriai.length) {
    console.log(`Daugiau skyrių turi: "${knyga2.pavadinimas}" (${knyga2.skyriai.length} skyriai)`);
} else {
    console.log("Abiejose knygose yra vienodas skyrių kiekis.");
}
let pigesneKaina = Math.min(knyga1.kaina, knyga2.kaina);
let brangesneKaina = Math.max(knyga1.kaina, knyga2.kaina);
let padvigubinta = pigesneKaina * 2;

console.log(`Pigesnės knygos padvigubinta kaina: €${padvigubinta.toFixed(2)}`);

if (padvigubinta > brangesneKaina) {
    console.log("Pigesnės knygos padvigubinta kaina būtų brangesnė už kitą knygą.");
} else {
    console.log("Padvigubinta pigesnės knygos kaina nebūtų brangesnė už kitą knygą.");
}

console.log('---------------------------------')

const prekes = [
    {
        pavadinimas: "Nešiojamas kompiuteris",
        kaina: 999.99,
        savikaina: 750,
        kodas: "NK001",
        kiekis: 10,
        dezesMatmenys: { x: 40, y: 30, z: 5 }
    },
    {
        pavadinimas: "Monitorius",
        kaina: 299.49,
        savikaina: 200,
        kodas: "MN002",
        kiekis: 15,
        dezesMatmenys: { x: 60, y: 40, z: 10 }
    },
    {
        pavadinimas: "Belaidė pelė",
        kaina: 24.99,
        savikaina: 9.99,
        kodas: "BP003",
        kiekis: 50,
        dezesMatmenys: { x: 10, y: 5, z: 4 }
    }
];
console.log("=== Visų prekių informacija ===");

prekes.forEach((preke, i) => {
    console.log(`Prekė #${i + 1}`);
    console.log(`Pavadinimas: ${preke.pavadinimas}`);
    console.log(`Kaina: ${preke.kaina} €`);
    console.log(`Savikaina: ${preke.savikaina} €`);
    console.log(`Kodas: ${preke.kodas}`);
    console.log(`Kiekis sandėlyje: ${preke.kiekis}`);
    console.log(`Dėžės matmenys: ${preke.dezesMatmenys.x}x${preke.dezesMatmenys.y}x${preke.dezesMatmenys.z} cm`);
    console.log('-----------------------------');
});
const kainosTekstas = prekes.map((preke, i) =>
    `${i + 1}-a prekė kainuoja - ${preke.kaina} €`
).join(', ');

console.log(kainosTekstas);

console.log("\nDėžių tūriais cm³:");

prekes.forEach(preke => {
    const { x, y, z } = preke.dezesMatmenys;
    const turis = x * y * z;
    console.log(`${preke.pavadinimas} dėžės tūris: ${turis} cm³`);
});

console.log('*******************************');

let knygynas = {
    pavadinimas: "Knygynas",
    adresas: "Vilnius",
    plotas: 150,
    kiekKnygu: 3000,
    darboValandos: "9:00 - 18:00",
    atidarytas: true
};

console.log("=== Knygyno informacija ===");
for (let raktas in knygynas) {
    console.log(`${raktas}: ${knygynas[raktas]}`);
}
console.log("Ne string tipo savybės");
for (let raktas in knygynas) {
    if (typeof knygynas[raktas] !== "string") {
        console.log(`${raktas}: ${knygynas[raktas]}`);
    }
}

console.log('*******************************');

let studentas1 = {
    vardas: "Jonas",
    pavarde: "Petrauskas",
    programa: "Informatika",
    pazymiai: [8, 7, 9, 10]
};

let studentas2 = {
    vardas: "Austėja",
    pavarde: "Kazlauskaitė",
    programa: "Biologija",
    pazymiai: [6, 5, 7, 6]
};

// Funkcija vidurkiui skaičiuoti
function skaiciuotiVidurki(pazymiai) {
    const suma = pazymiai.reduce((a, b) => a + b, 0);
    return suma / pazymiai.length;
}

// Apskaičiuojame vidurkius
const vidurkis1 = skaiciuotiVidurki(studentas1.pazymiai);
const vidurkis2 = skaiciuotiVidurki(studentas2.pazymiai);

// Išvedame studentų informaciją ir vidurkius
console.log("=== Studentų informacija ===");
console.log(`${studentas1.vardas} ${studentas1.pavarde}, ${studentas1.programa}, pažymiai: ${studentas1.pazymiai.join(", ")}, vidurkis: ${vidurkis1.toFixed(2)}`);
console.log(`${studentas2.vardas} ${studentas2.pavarde}, ${studentas2.programa}, pažymiai: ${studentas2.pazymiai.join(", ")}, vidurkis: ${vidurkis2.toFixed(2)}`);

// Nustatome, kuris studentas turi didesnį vidurkį
if (vidurkis1 > vidurkis2) {
    console.log(`\nDidesnį vidurkį turi: ${studentas1.vardas} ${studentas1.pavarde}`);
} else if (vidurkis2 > vidurkis1) {
    console.log(`\nDidesnį vidurkį turi: ${studentas2.vardas} ${studentas2.pavarde}`);
} else {
    console.log(`\nAbu studentai turi vienodą vidurkį.`);
}