import {Osoba} from "./osoba.model";
import {Vakcina} from "./vakcina.model";

export class Ockovanost{

  id?: number;
  osobaId?: number;
  vakcinaId?: number;
  datum: string;

  constructor(ockovanost: ZoznamOckovanosti, osoba: Osoba, vakcina: Vakcina) {
    this.id = ockovanost.id;
    this.osobaId = osoba.id;
    this.vakcinaId = vakcina.id;
    this.datum = ockovanost.datum;
  }
}

export class ZoznamOckovanosti{

  id?: number;
  osobaId?: number;
  vakcinaId?: number;
  datum: string;

  constructor(ockovanost: ZoznamOckovanosti, osoba: Osoba, vakcina: Vakcina) {
    this.id = ockovanost.id;
    this.osobaId = osoba.id;
    this.vakcinaId = vakcina.id;
    this.datum = ockovanost.datum;
  }
}
