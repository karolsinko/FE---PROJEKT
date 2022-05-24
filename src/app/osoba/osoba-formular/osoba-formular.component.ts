import { Component, EventEmitter,Input,Output} from '@angular/core';
import {Osoba} from "../../models/osoba.model";
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent {

  @Input()
  set osoba(data: Osoba | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajOsobu = new EventEmitter<Osoba>();

  @Output()
  upravOsobu = new EventEmitter<Osoba>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null),
      rokNar: new FormControl(null),
      rodCislo: new FormControl(null),
      telCislo: new FormControl(null),
      bydlisko: new FormControl(null),
      pohlavie: new FormControl(null)
    });
  }

  private fillForm(osoba: Osoba): void {
    this.form.controls['id'].setValue(osoba.id);
    this.form.controls['meno'].setValue(osoba.meno);
    this.form.controls['priezvisko'].setValue(osoba.priezvisko);
    this.form.controls['rokNar'].setValue(osoba.rokNar);
    this.form.controls['rodCislo'].setValue(osoba.rodCislo);
    this.form.controls['telCislo'].setValue(osoba.telCislo);
    this.form.controls['bydlisko'].setValue(osoba.bydlisko);
    this.form.controls['pohlavie'].setValue(osoba.pohlavie);
  }

  public pridaj(): void {
    this.pridajOsobu.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravOsobu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.osoba = undefined;
    this.form.reset();
  }
}
