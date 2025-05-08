let a = 6;
let b = 5;
let c = 4;
switch (a) {
    case 1:
        console.log('skaiciu suma', a + b + c);
        break;
    case 2:
        console.log('antro ir trecio sandauga', b * c);
        break;
    case 3:
        console.log('pirmo kvadratas', a * a);
        break;
    default: 
        console.log('klaida');    
}

// uzduotis kita

let error = 400;

switch (error) {
    case 400:
        console.log('bloga uzklausa 400');
        break;
    case 500:
        console.log('serverio klaida 500');
        break;
    case 404:
        console.log('puslapis nerastas 404');
        break;
    default: 
        console.log('nezinoma klaida');    
}