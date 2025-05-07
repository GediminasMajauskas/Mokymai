let skaicius = 19;
 if (skaicius %5 == 0) {
    console.log (`${skaicius} dalinasi iš 5 daugybos lentele nuo 1 iki 5`)
    console.log (`${skaicius} * 1 = ${skaicius * 1}`);
    console.log (`${skaicius} * 2 = ${skaicius * 2}`);
    console.log (`${skaicius} * 3 = ${skaicius * 3}`);
    console.log (`${skaicius} * 4 = ${skaicius * 4}`);
    console.log (`${skaicius} * 5 = ${skaicius * 5}`);
 } 
 else if (skaicius % 2 == 0) {
    console.log (`${skaicius} yra lyginis`);
    console.log (` jo kvadratas: ${skaicius ** 2} `);
    console.log (`${skaicius / 2 } dalinasi iš dviejų `);
 }
 else if (skaicius % 7 !== 0) {
    let skaicius2 = 5;
    if (skaicius2 != 0) {
    console.log (`${skaicius2} skaicius nesidalina iš 7`);
    console.log (` suma: ${skaicius + skaicius2}`);
    console.log (` skirtumas: ${skaicius - skaicius2}`);
    console.log (` dalmuo: ${skaicius / skaicius2}`);
    console.log (` sandauga: ${skaicius * skaicius2}`);
    }
    else {
        console.log ("dalyba iš 0 negalima");
    }
}
 