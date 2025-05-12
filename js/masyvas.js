
let skaiciai = [7, 5, 9, 7, 5, 23, 45, 99];

console.log(skaiciai[0]);
console.log(skaiciai[skaiciai.length - 1]);
console.log('_________________________')
console.log(skaiciai[2]);
console.log(skaiciai[7]);

console.log('_________________________')

let automobiliai = ["BMW", "Audi", "Tesla", "Toyota", "Volvo", "Honda"];
console.log("Pradinis", automobiliai);

//Pakeiciame pasirinktas reiksmes 
automobiliai[1] = "Mercedes"; 
automobiliai[3] = "Ford";  
automobiliai[5] = "Mazda";  

//Pakeistos reiksmes
    console.log("Pakeistas", automobiliai);

    console.log('_________________________')


let pildomas = [];

pildomas.push('skaicius');
pildomas.push('darbas');
pildomas.push('asmuo');
pildomas.push('laikas');
    console.log(pildomas);

    console.log('_________________________')

let atsitiktiniai = [];

    for (let i = 0; i < 10; i++) {
        let skaicius = Math.floor(Math.random() * 100000);
        atsitiktiniai.push(skaicius);
    }
    
    console.log("atsitiktiniai", atsitiktiniai);   
    
    console.log('_________________________')

let studentas1 = [3, 7, 2];
let studentas2 = [10, 7, 3];
    
let suma1 = studentas1[0] + studentas1[1] + studentas1[2];
let vidurkis1 = suma1 / 3;
    console.log("Studento 1 ", vidurkis1);
    
let suma2 = studentas2[0] + studentas2[1] + studentas2[2];
let vidurkis2 = suma2 / 3;
    console.log("Studento 2 ", vidurkis2);
    
    if (vidurkis1 > vidurkis2) {
        console.log("Studentas 1 geresnis vidurkis.");
    } else if (vidurkis2 > vidurkis1) {
        console.log("Studentas 2 turi geresnis vidurkis.");
    } else {
        console.log("Abu vienodi ");
    }
    console.log('_________________________')

let programos = ['Fizika', 'Matematika', 'Geografija', 'Biologija', 'Filosofija'];   
    for(let i = 0; i <programos.length; i++)
        console.log('Programos:', programos[i]);
    
        console.log('_________________________');

let salys = ['Lietuva', 'Latvija', 'Estija', 'Lenkyja', 'Vokietyja', 'Suomyja'];   
    for(let i = 0; i <salys.length; i++)
            console.log('Šalis:', salys[i]);
        
            console.log('_________________________');