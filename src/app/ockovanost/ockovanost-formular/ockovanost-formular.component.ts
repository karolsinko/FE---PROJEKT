import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ockovanost} from "../../models/ockovanost.model";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ockovanost-formular',
  templateUrl: './ockovanost-formular.component.html',
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

  @Output()
  pridajOckovanie = new EventEmitter<Ockovanost>();

  @Output()
  upravOckovanost = new EventEmitter<Ockovanost>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      osobaId: new FormControl(null),
      vakcinaId: new FormControl(null),
      datumOckovania: new FormControl(null)
    });
  }

  private fillForm(ockovanost: Ockovanost): void {
    this.form.controls['id'].setValue(ockovanost.id)
    this.form.controls['osobaId'].setValue(ockovanost.osoba.id)
    this.form.controls['vakcinaId'].setValue(ockovanost.vakcina.id)
    this.form.controls['datumOckovania'].setValue(ockovanost.datumOckovania)
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
