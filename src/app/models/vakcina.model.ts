export class Vakcina{

  id?: string;
  nazov: string;
  pocet_davok: string;

  constructor(vakcina: Vakcina) {
    this.nazov = vakcina.nazov;
    this.pocet_davok = vakcina.pocet_davok;
  }
}

export class ZoznamVakcin {
  id?: string;
  nazov: string;
  pocet_davok: string;

  constructor(vakcina: ZoznamVakcin) {
    this.nazov = vakcina.nazov;
    this.pocet_davok= vakcina.pocet_davok;
  }


}
