function skaiciuoti() {
    const ilgis = parseFloat(document.getElementById('ilgis').value) / 100; // cm -> m
    const plotis = parseFloat(document.getElementById('plotis').value) / 100;
    const storis = parseFloat(document.getElementById('storis').value) / 100;
    const kiekis = parseInt(document.getElementById('kiekis').value);
    const kainaUzM3 = parseFloat(document.getElementById('kaina').value);

    // Išvalom prieš tikrinimą
document.getElementById("klaidos-pranesimas").textContent = "";

if (
    isNaN(ilgis) ||
    isNaN(plotis) ||
    isNaN(storis) ||
    isNaN(kiekis) ||
    isNaN(kainaUzM3)
) {
    document.getElementById("klaidos-pranesimas").textContent =
        "❗ Prašome užpildyti visus laukus teisingai.";
    setTimeout(() => {
        document.getElementById("klaidos-pranesimas").textContent = "";
    }, 1000);
    
    return;
}

    const turisVienos = ilgis * plotis * storis;
    const turisViso = turisVienos * kiekis;
    const bendraKaina = turisViso * kainaUzM3;

    document.getElementById('turis-vienos').textContent = turisVienos.toFixed(4);
    document.getElementById('turis-bendras').textContent = turisViso.toFixed(4);
    document.getElementById('bendra-kaina').textContent = bendraKaina.toFixed(2);

}

function resetuoti() {
    document.getElementById('ilgis').value = '';
    document.getElementById('plotis').value = '';
    document.getElementById('storis').value = '';
    document.getElementById('kiekis').value = '';
    document.getElementById('kaina').value = '';

    // document.getElementById('turis-vienos').textContent = '';
    // document.getElementById('turis-bendras').textContent = '';
    // document.getElementById('bendra-kaina').textContent = '';
}