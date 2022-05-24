export class Ockovanost{

  id?: number;
  osobaId?: number;
  vakcinaId?: number;
  datum: string;

  constructor(ockovanost: Ockovanost) {
    this.id = ockovanost.id;
    this.osobaId = ockovanost.osobaId;
    this.vakcinaId = ockovanost.vakcinaId;
    this.datum = ockovanost.datum;
  }
}

export class ZoznamOckovanosti{

  id?: number;
  osobaId?: number;
  vakcinaId?: number;
  datum: string;

  constructor(ockovanost: ZoznamOckovanosti) {
    this.id = ockovanost.id;
    this.osobaId = ockovanost.osobaId;
    this.vakcinaId = ockovanost.vakcinaId;
    this.datum = ockovanost.datum;
  }
}
