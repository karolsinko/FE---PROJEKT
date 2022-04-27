
export class Ockovanost{

  id?: number;
  osobaId: number;
  vakcinaId: number;
  timeStampZac: string;
  timeStampKon: string;

  constructor(id: number, osobaId: number, vakcinaId: number,timeStampZac: string, timeStampKon: string) {
    this.id = id;
    this.osobaId = osobaId;
    this.vakcinaId = vakcinaId;
    this.timeStampZac = timeStampZac;
    this.timeStampKon = timeStampKon;
  }

}

export class ZoznamOckovanosti{

  id?: number;
  osobaId: number;
  vakcinaId: number;
  timeStampZac: string;
  timeStampKon: string;

  constructor(id: number, osobaId: number, vakcinaId: number, timeStampZac: string, timeStampKon: string) {
    this.id = id;
    this.osobaId = osobaId;
    this.vakcinaId = vakcinaId;
    this.timeStampZac = timeStampZac;
    this.timeStampKon = timeStampKon;
  }

}
