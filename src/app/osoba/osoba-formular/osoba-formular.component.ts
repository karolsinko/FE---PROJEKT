import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Osoba} from "../../models/osoba.model";


@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']

})
export class OsobaFormularComponent {

  @Input()
  set osoba(data: Osoba | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  @Output()
  pridajOsobu = new EventEmitter<Osoba>();

  @Output()
  upravOsobu = new EventEmitter<Osoba>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null),
      rok_nar: new FormControl(null),
      rod_cislo: new FormControl(null),
      tel_cislo: new FormControl(null),
      bydlisko: new FormControl(null),
      pohlavie: new FormControl(null)
    });
  }

  private fillForm(osoba: Osoba): void {
    this.form.setValue({id:osoba.id,meno:osoba.meno,priezvisko:osoba.priezvisko,rok_nar:osoba.rok_nar,rod_cislo:osoba.rod_cislo,tel_cislo:osoba.tel_cislo,bydlisko:osoba.bydlisko,pohlavie:osoba.pohlavie})
  }

  public pridaj(): void {
    this.pridajOsobu.emit({ id: Math.random().toString(), meno: this.form.value.meno, priezvisko: this.form.value.priezvisko, rok_nar: this.form.value.rok_nar, rod_cislo: this.form.value.rod_cislo, tel_cislo: this.form.value.tel_cislo, bydlisko: this.form.value.bydlisko, pohlavie: this.form.value.pohlavie});
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
