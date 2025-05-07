let pirmas = "w";
let antras = "A";
let trecias = 0;

if (pirmas > antras) {
    console.log (" pirmas didesnis "); 
}
else if (antras > trecias) {
    console.log (" antras didesnis ");
}
else if ( trecias > pirmas ) {
    console.log (" trecias daugiau ");
}
else if ( pirmas === antras) {
    console.log (" pirmas = antras ");
}
else if ( antras === trecias) {
    console.log (" antras = trecias ");
}
else if ( pirmas === 0 ) {
    console.log (" pirmas = 0");
}
else if ( antras < 0 ) {
    console.log (" antras = neigiamas");
}
else if ( trecias > 0 ) {
    console.log (" trecias = teigiamas");
}
else {
    console.log ( "niekas netiko :)")
}
