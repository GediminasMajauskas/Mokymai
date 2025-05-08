// for (let i = 0; i <= 10; i++) {
//     console.log('skaicius', i);
// }
//     console.log('___________________');
// for (let i = 0; i <= 15; i += 2) {
//     console.log('skaicius', i);
// }
// console.log('___________________');

for (let i = 1; i <= 20; i += 3) {
    console.log("[" + i + "]");
}
    console.log('___________________');

for (let i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
        console.log(i);    
    }
}
    console.log('___________________');
    
let pradzia = 10;
let pabaiga = 50;
    
if(pradzia < pabaiga){
    for (let i = pradzia; i <= pabaiga; i++) {
    console.log(i+" "+(i ** 2));
        }
} else { console.log('pradzia turi buti mazesne uz pabaiga');
    }
    console.log('///////////////////////');

let pradzia1 = 10;
let pabaiga1 = 30;
         
         if(pradzia1 < pabaiga1){
             for (let i = pradzia1; i <= pabaiga1; i++) {
                 if (i % 2 != 0 || i % 8 == 0) {
                    console.log(i)
                 }
             }
         } else { console.log('pradzia turi buti mazesne uz pabaiga');
          }
          
          
let a = 4;
let b = 3;
let sandauga = 0;
          
for (let i = 0; i < b; i++) {
    sandauga += a;
}
          
    console.log("Sandauga:", sandauga);


