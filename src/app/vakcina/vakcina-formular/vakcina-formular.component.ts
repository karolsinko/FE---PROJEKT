import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Vakcina} from "../../models/vakcina.model";


@Component({
  selector: 'app-vakcina-formular',
  templateUrl: './vakcina-formular.component.html',
  styleUrls: ['./vakcina-formular.component.css']

})
export class VakcinaFormularComponent {

  @Input()
  set vakcina(data: Vakcina | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  @Output()
  pridajVakcinu = new EventEmitter<Vakcina>();

  @Output()
  upravVakcinu = new EventEmitter<Vakcina>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      pocet_davok: new FormControl(null)
    });

  }


  private fillForm(vakcina: Vakcina): void {
    this.form.setValue({id:vakcina.id,nazov:vakcina.nazov,pocet_davok:vakcina.pocet_davok})

  }

  public pridaj(): void {
    this.pridajVakcinu.emit({ id: Math.random().toString(), nazov: this.form.value.nazov, pocet_davok: this.form.value.pocet_davok});
    this.form.reset();
  }

  public uprav(): void {
    this.upravVakcinu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.vakcina = undefined;
    this.form.reset();
  }
}
