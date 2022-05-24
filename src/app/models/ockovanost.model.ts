import {Osoba} from "./osoba.model";
import {Vakcina} from "./vakcina.model";

export class Ockovanost{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datum_ockovania: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datum_ockovania: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;
    this.datum_ockovania = datum_ockovania;
  }
}

export class ZoznamOckovanosti{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datum_ockovania: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datum_ockovania: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;
    this.datum_ockovania = datum_ockovania;
  }
}
