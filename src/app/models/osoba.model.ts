export class Osoba {

  id?: number;
  meno: string;
  priezvisko: string;
  rokNar: string;
  rodCislo: string;
  telCislo: string;
  bydlisko: string;
  pohlavie: string;

  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.rokNar = osoba.rokNar;
    this.rodCislo = osoba.rodCislo;
    this.telCislo = osoba.telCislo;
    this.bydlisko = osoba.bydlisko;
    this.pohlavie = osoba.pohlavie;
  }
}

  export class ZoznamOsob {
  id?: number;
  meno: string;
  priezvisko: string;
  rokNar: string;
  rodCislo: string;
  telCislo: string;
  bydlisko: string;
  pohlavie: string;


  constructor(osoba: ZoznamOsob) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.rokNar = osoba.rokNar;
    this.rodCislo = osoba.rodCislo;
    this.telCislo = osoba.telCislo;
    this.bydlisko = osoba.bydlisko;
    this.pohlavie = osoba.pohlavie;
  }
}
