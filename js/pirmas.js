let a = -5, b = 0;
let c = -4, d = 4;

if (a < b && c < d) { // tikriname ar intervalai galiojantys
  let x = Math.max(a, c);
  let y = Math.min(b, d);

  if (x <= y) {
    console.log(`Sankirta [${x}, ${y}]`);

} else {
console.log("Nera sankirtos");
}
} else {
console.log("Intervalai neteisingi (a turi būti mažiau už b, c turi būti mažiau už d).");
}