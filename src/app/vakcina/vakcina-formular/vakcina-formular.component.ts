import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Vakcina} from "../../models/vakcina.model";


@Component({
  templateUrl: './vakcina-formular.component.html',
  styleUrls: ['./vakcina-formular.component.css'],
  selector: 'app-vakcina-formular'
})
export class VakcinaFormularComponent {

  @Input()
  set vakcina(data: Vakcina | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajVakcinu = new EventEmitter<Vakcina>();

  @Output()
  upravVakcinu = new EventEmitter<Vakcina>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      pocet_davok: new FormControl(null)
    });
  }

  private fillForm(vakcina: Vakcina): void {
    this.form.controls['id'].setValue(vakcina.id)
    this.form.controls['nazov'].setValue(vakcina.nazov)
    this.form.controls['pocet_davok'].setValue(vakcina.pocet_davok)
  }

  public pridaj(): void {
    this.pridajVakcinu.emit(this.form.value);
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
