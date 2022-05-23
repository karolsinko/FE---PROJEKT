import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vakcina, ZoznamVakcin} from "../../models/vakcina.model";
import {Osoba, ZoznamOsob} from "../../models/osoba.model";
import { FormControl, FormGroup } from '@angular/forms';
import {Ockovanost, ZoznamOckovanosti} from "../../models/ockovanost.model";

@Component({
  selector: 'app-ockovanost-formular',
  templateUrl: './ockovanost-formular.component.html',
  styleUrls: ['./ockovanost-formular.component.css']
})
export class OckovanostFormularComponent implements OnInit {

  form: FormGroup;

  @Input()
  public vakciny: ZoznamVakcin[] = [];
  @Input()
  public osoby: ZoznamOsob[] = [];
  @Input()
  public ockovania: ZoznamOckovanosti[] = [];

  /*
  @Output()
  pridajVakcinu = new EventEmitter<Vakcina>();
  @Output()
  pridajOsobu = new EventEmitter<Osoba>();
  @Output()
  pridajOckovanie = new EventEmitter<Ockovanost>();
   */

  @Output()
  upravVakcinu = new EventEmitter<Vakcina>();
  @Output()
  upravOsobu = new EventEmitter<Osoba>();
  @Output()
  upravOckovanie = new EventEmitter<Ockovanost>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      osobaId: new FormControl(null),
      vakcinaId: new FormControl(null),
      datumOckovania: new FormControl(null)
    });
  }

  private fillForm(vakcina: Vakcina, osoba: Osoba, ockovanost: Ockovanost): void {
    this.form.controls['id'].setValue(ockovanost.id)
    this.form.controls['osobaId'].setValue(osoba.id)
    this.form.controls['vakcinaId'].setValue(vakcina.id)
    this.form.controls['datumOckovania'].setValue(ockovanost.datumOckovania)
  }
  ngOnInit(): void {
  }
/*
  public pridaj(): void {
    this.pridajVakcinu.emit(this.form.value);
    this.pridajOsobu.emit(this.form.value);
    this.pridajOckovanie.emit(this.form.value);
    this.form.reset();
  }

 */

  public uprav(): void {
    this.upravVakcinu.emit(this.form.value);
    this.upravOsobu.emit(this.form.value);
    this.upravOckovanie.emit(this.form.value);
    this.form.reset();
  }
/*
  public zrus(): void {
    this.vakciny = undefined;
    this.form.reset();
  }

 */

}
