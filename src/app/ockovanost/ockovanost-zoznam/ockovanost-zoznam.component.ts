import {Component, Input} from '@angular/core';
import {Vakcina, ZoznamVakcin} from "../../models/vakcina.model";
import {Osoba, ZoznamOsob} from "../../models/osoba.model";
import {Ockovanost, ZoznamOckovanosti} from "../../models/ockovanost.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ockovanost-zoznam',
  templateUrl: './ockovanost-zoznam.component.html',
  styleUrls: ['./ockovanost-zoznam.component.css']
})
export class OckovanostZoznamComponent {
  zoznam: FormGroup;

  constructor() {
    this.zoznam = new FormGroup({
      id: new FormControl(null),
      idOsoba: new FormControl(null),
      idVakcina: new FormControl(null),
      timeStampZac: new FormControl(null),
      timeStampKon: new FormControl(null)
    });
  }

  private fillForm(vakcina: Vakcina, osoba: Osoba, ockovanost: Ockovanost): void {
    this.zoznam.controls['id'].setValue(ockovanost.id)
    this.zoznam.controls['idOsoba'].setValue(osoba.id)
    this.zoznam.controls['idVakcina'].setValue(vakcina.id)
    this.zoznam.controls['timeStampZac'].setValue(ockovanost.timeStampZac)
    this.zoznam.controls['timeStampKon'].setValue(ockovanost.timeStampKon)
  }

  @Input()
  vakciny: ZoznamVakcin[] = [];
  @Input()
  osoby: ZoznamOsob[] = [];
  @Input()
  ockovania: ZoznamOckovanosti[] = [];


}
