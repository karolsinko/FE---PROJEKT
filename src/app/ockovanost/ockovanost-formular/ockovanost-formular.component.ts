import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ockovanost, ZoznamOckovanosti} from "../../models/ockovanost.model";
import { FormControl, FormGroup } from '@angular/forms';
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";

@Component({
  selector: 'app-ockovanost-formular',
  templateUrl:  './ockovanost-formular.component.html',
  styleUrls: ['./ockovanost-formular.component.css']
})
export class OckovanostFormularComponent{

  @Input()
  vakciny: ZoznamVakcin[] = [];
  @Input()
  osoby: ZoznamOsob[] = [];
  @Input()
  ockovania: ZoznamOckovanosti[] = [];

  @Input()
  set ockovanost(data: Ockovanost | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajOckovanie = new EventEmitter<Ockovanost>();

  @Output()
  upravOckovanost = new EventEmitter<Ockovanost>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      osobaId: new FormControl(null),
      vakcinaId: new FormControl(null),
      datum: new FormControl(null)
    });
  }

  private fillForm(ockovanost: Ockovanost): void {
    this.form.controls['id'].setValue(ockovanost.id)
    this.form.controls['osobaId'].setValue(ockovanost.osobaId)
    this.form.controls['vakcinaId'].setValue(ockovanost.vakcinaId)
    this.form.controls['datum'].setValue(ockovanost.datum)
  }

  public pridaj(): void {
    this.pridajOckovanie.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravOckovanost.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.ockovanost = undefined;
    this.form.reset();
  }
}
