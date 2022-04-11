import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Vakcina} from "../../models/vakcina.model";
import {VakcinaServiceService} from "../../../vakcina-service.service";
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

  @Output()
  zmazVakcinu = new EventEmitter<Vakcina>();

  form!: FormGroup;

  constructor(private vakcinaService: VakcinaServiceService) {
    this.vytvorForm();
  }

  private vytvorForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      pocet_davok: new FormControl(null)
    });

  }


  private fillForm(vakcina: Vakcina): void {
    this.form.controls["id"].setValue(vakcina.id);
    this.form.controls["nazov"].setValue(vakcina.nazov);
    this.form.controls["pocet_davok"].setValue(vakcina.pocet_davok);
  }

  public pridaj(): void {
    if (this.form.valid){
      this.pridajVakcinu.emit(this.form.value);
      this.form.reset();
    }
  }

 /* public uprav(): void {
    this.upravVakcinu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.vakcina = undefined;
    this.form.reset();
  }

  */
}
