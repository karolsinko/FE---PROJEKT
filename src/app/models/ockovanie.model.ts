export class Ockovanie {
  id?: number;
  osobaId: number;
  vakcinaId: number;
  meno: String;
  priezvisko: String;
  rodCislo: String;
  nazov: String;
  datumOckovania: Date;

  constructor(ockovanie: Ockovanie) {
    this.id = ockovanie.id;
    this.osobaId = ockovanie.osobaId;
    this.vakcinaId = ockovanie.vakcinaId;
    this.meno = ockovanie.meno;
    this.priezvisko=ockovanie.priezvisko;
    this.rodCislo=ockovanie.rodCislo;
    this.nazov=ockovanie.nazov;
    this.datumOckovania = ockovanie.datumOckovania;
  }
}

export class OckovanieZoznam {
  id?: number;
  osobaId: number;
  vakcinaId: number;
  meno: String;
  priezvisko: String;
  rodCislo: String;
  nazov: String;
  datumOckovania: Date;

  constructor(ockovanie: Ockovanie) {
    this.id = ockovanie.id;
    this.osobaId = ockovanie.osobaId;
    this.vakcinaId = ockovanie.vakcinaId;
    this.meno = ockovanie.meno;
    this.priezvisko=ockovanie.priezvisko;
    this.rodCislo=ockovanie.rodCislo;
    this.nazov=ockovanie.nazov;
    this.datumOckovania = ockovanie.datumOckovania;
  }
}
