
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

  osoba: Osoba;
  vakcina: Vakcina;
  datumOckovania: string;

  constructor(id: number, osoba: Osoba, vakcina: Vakcina,datumOckovania: string) {
    this.id = id;
    this.osoba = osoba;
    this.vakcina = vakcina;

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
