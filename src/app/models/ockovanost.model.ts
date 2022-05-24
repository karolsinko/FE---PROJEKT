import {Osoba} from "./osoba.model";
import {Vakcina} from "./vakcina.model";

export class Ockovanost{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datum: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datum: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;
    this.datum = datum;
  }
}

export class ZoznamOckovanosti{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datum: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datum: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;
    this.datum = datum;
  }
}
