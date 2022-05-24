export class Vakcina{

  id?: number;
  nazov: string;
  pocet_davok: number;

  constructor(vakcina: Vakcina) {
    this.id = vakcina.id;
    this.nazov = vakcina.nazov;
    this.pocet_davok = vakcina.pocet_davok;
  }
}

export class ZoznamVakcin {
  id?: number;
  nazov: string;
  pocet_davok: number;

  constructor(vakcina: ZoznamVakcin) {
    this.id = vakcina.id;
    this.nazov = vakcina.nazov;
    this.pocet_davok= vakcina.pocet_davok;
  }
}
