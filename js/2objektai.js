const darbuotojas = {
    vardas: "Ona",
    pavarde: "Oniene",
    atlyginimas: 1200,
    etatas: 1.0,
  
    
    pakeltasAtlyginimas: function(procentai) {
      const padidejimas = this.atlyginimas * (procentai / 100);
      const naujasAtlyginimas = this.atlyginimas + padidejimas;
      console.log(`${this.vardas} ${this.pavarde} atlyginimas pakėlus ${procentai}% būtų: ${naujasAtlyginimas} €`);
    },
  
    atlyginimasPagalEtata: function(naujasEtatas) {
      const naujasAtlyginimas = this.atlyginimas * naujasEtatas;
      console.log(`${this.vardas} ${this.pavarde} atlyginimas dirbant ${naujasEtatas} etatu būtų: ${naujasAtlyginimas} €`);
    }
  };
  
  
  darbuotojas.pakeltasAtlyginimas(20);      //procentai
  darbuotojas.atlyginimasPagalEtata(0.7);   //etatas

  console.log('___________________________________')
