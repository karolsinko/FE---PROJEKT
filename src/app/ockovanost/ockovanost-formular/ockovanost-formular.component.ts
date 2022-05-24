import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  set ockovanost(data: Ockovanost | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Input()
  public osoby: ZoznamOsob[] =  [];
  @Input()
  public vakciny: ZoznamVakcin[] =  [];
  @Input()
  public ockovanie?: Ockovanost;
/*
  @Output()
  selectOckovanie = new EventEmitter<Ockovanost>();

 */
  @Output()
  pridajOckovanie = new EventEmitter<Ockovanost>();

  @Output()
  upravOckovanost = new EventEmitter<Ockovanost>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      osoba: new FormControl(null),
      vakcina: new FormControl(null),
      datum: new FormControl(null)
    });
  }

  private fillForm(ockovanost: Ockovanost): void {
    this.form.controls['id'].setValue(ockovanost.id)
    this.form.controls['osoba'].setValue(ockovanost.osoba.id)
    this.form.controls['vakcina'].setValue(ockovanost.vakcina.id)
    this.form.controls['datum'].setValue(ockovanost.datum)
  }
/*
  public select(): void {
    this.selectOckovanie.emit(this.form.value);
    this.form.reset();
  }

 */

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
