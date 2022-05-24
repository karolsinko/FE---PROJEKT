import {Osoba} from "./osoba.model";
import {Vakcina} from "./vakcina.model";

export class Ockovanost{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datum: string;

  constructor(ockovanost: Ockovanost) {
    this.id = ockovanost.id;
    this.osoba = ockovanost.osoba;
    this.vakcina = ockovanost.vakcina;
    this.datum = ockovanost.datum;
  }
}

export class ZoznamOckovanosti{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datum: string;

  constructor(ockovanost: ZoznamOckovanosti) {
    this.id = ockovanost.id;
    this.osoba = ockovanost.osoba;
    this.vakcina = ockovanost.vakcina;
    this.datum = ockovanost.datum;
  }
}
