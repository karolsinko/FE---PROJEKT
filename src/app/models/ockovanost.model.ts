
export class Ockovanost{

  id?: number;
  osobaId: number;
  vakcinaId: number;
  datumOckovania: string;

  constructor(id: number, osobaId: number, vakcinaId: number,datumOckovania: string) {
    this.id = id;
    this.osobaId = osobaId;
    this.vakcinaId = vakcinaId;
    this.datumOckovania = datumOckovania;
  }

}

export class ZoznamOckovanosti{

  id?: number;
  osobaId: number;
  vakcinaId: number;
  datumOckovania: string;

  constructor(id: number, osobaId: number, vakcinaId: number,datumOckovania: string) {
    this.id = id;
    this.osobaId = osobaId;
    this.vakcinaId = vakcinaId;
    this.datumOckovania = datumOckovania;
  }

}
