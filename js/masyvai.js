 function Atsitiktinis(masyvas, kiekis) {
    for (let i = 0; i < kiekis; i++) {
      const atsitiktinis = Math.floor(Math.random() * 100) + 1;
      masyvas.push(atsitiktinis);
    }
  }
  
  function Didziausia(masyvas) {
    let didziausias = masyvas[0];
    for (let i = 1; i < masyvas.length; i++) {
      if (masyvas[i] > didziausias) {
        didziausias = masyvas[i];
      }
    }
    console.log("Masyvas:", masyvas.join(", "));
    console.log("Didžiausias skaičius šiame masyve:", didziausias);
    console.log("------------------------------");
  }
  
  const masyvas1 = [];
  const masyvas2 = [];
  const masyvas3 = [];
  const masyvas4 = [];
  
  Atsitiktinis(masyvas1, 10);
  Atsitiktinis(masyvas2, 7);
  Atsitiktinis(masyvas3, 12);
  Atsitiktinis(masyvas4, 15);
  
  Didziausia(masyvas1);
  Didziausia(masyvas2);
  Didziausia(masyvas3);
  Didziausia(masyvas4);


