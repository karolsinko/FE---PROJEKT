import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vakcina, ZoznamVakcin} from '../../models/vakcina.model';

@Component({
  selector: 'app-vakcina-zoznam',
  templateUrl: './vakcina-zoznam.component.html',
  styleUrls: ['./vakcina-zoznam.component.css']
})
export class VakcinaZoznamComponent {

  @Input()
  vakciny: ZoznamVakcin[] = [];

  @Output()
  upravVakcinu: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  vymazVakcinu: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  /*
  uprav(vakcina: Vakcina): void {
    this.upravVakcinu.emit(vakcina);
  }

  zmaz(vakcina: Vakcina): void {
    this.vymazVakcinu.emit(vakcina);
  }

  */
}
