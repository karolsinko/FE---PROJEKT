export class Osoba {

  id?: number;
  meno: string;
  priezvisko: string;
  rok_nar: string;
  rod_cislo: string;
  tel_cislo: string;
  bydlisko: string;
  pohlavie: string;

  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.rok_nar = osoba.rok_nar;
    this.rod_cislo = osoba.rod_cislo;
    this.tel_cislo = osoba.tel_cislo;
    this.bydlisko = osoba.bydlisko;
    this.pohlavie = osoba.pohlavie;
  }
}
export class ZoznamOsob {
  id?: number;
  meno: string;
  priezvisko: string;
  rok_nar: string;
  rod_cislo: string;
  tel_cislo: string;
  bydlisko: string;
  pohlavie: string;


  constructor(osoba: ZoznamOsob) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.rok_nar = osoba.rok_nar;
    this.rod_cislo = osoba.rod_cislo;
    this.tel_cislo = osoba.tel_cislo;
    this.bydlisko = osoba.bydlisko;
    this.pohlavie = osoba.pohlavie;
  }
}
