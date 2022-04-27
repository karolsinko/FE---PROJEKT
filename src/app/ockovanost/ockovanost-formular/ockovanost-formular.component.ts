import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Ockovanie} from "../../models/ockovanie.model";

@Component({
  selector: 'app-ockovanost-formular',
  templateUrl: './ockovanost-formular.component.html',
  styleUrls: ['./ockovanost-formular.component.css']
})
export class OckovanostFormularComponent implements OnInit {


  ngOnInit(): void {
  }

  @Input()
  set ockovanie(data: Ockovanie) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajOckovanie = new EventEmitter<Ockovanie>();

  @Output()
  upravOckovanie = new EventEmitter<Ockovanie>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null),
      rodCislo: new FormControl(null),
      nazov: new FormControl(null),
      datumOckovania: new FormControl(null),

    });
  }

  private naplnForm(ockovanie: Ockovanie): void {
    this.form.controls['id'].setValue(ockovanie.id);
    this.form.controls["meno"].setValue(ockovanie.meno);
    this.form.controls["priezvisko"].setValue(ockovanie.priezvisko);
    this.form.controls["rodCislo"].setValue(ockovanie.rodCislo);
    this.form.controls["nazov"].setValue(ockovanie.nazov);
    this.form.controls["datumOckovania"].setValue(ockovanie.datumOckovania);

  }

  public pridaj(): void {
    this.pridajOckovanie.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravOckovanie.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}

