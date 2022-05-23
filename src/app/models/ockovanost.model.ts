
import {Osoba} from "./osoba.model";
import {Vakcina} from "./vakcina.model";

export class Ockovanost{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datumOckovania: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datumOckovania: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;
    this.datumOckovania = datumOckovania;
  }
}

export class ZoznamOckovanosti{

  id?: number;

  osoba: Osoba;
  vakcina: Vakcina;
  datumOckovania: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datumOckovania: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;
    this.datumOckovania = datumOckovania;
  }
}
