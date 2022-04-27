export class Vakcina{

  id?: number;
  nazov: string;
  pocetDavok: string;

  constructor(vakcina: Vakcina) {
    this.id = vakcina.id;
    this.nazov = vakcina.nazov;
    this.pocetDavok = vakcina.pocetDavok;
  }
}

export class ZoznamVakcin {
  id?: number;
  nazov: string;
  pocetDavok: string;

  constructor(vakcina: ZoznamVakcin) {
    this.id = vakcina.id;
    this.nazov = vakcina.nazov;
    this.pocetDavok= vakcina.pocetDavok;
  }
}
