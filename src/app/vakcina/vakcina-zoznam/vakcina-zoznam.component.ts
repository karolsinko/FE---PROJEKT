import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ZoznamVakcin} from '../../models/vakcina.model';

@Component({
  templateUrl: './vakcina-zoznam.component.html',
  styleUrls: ['./vakcina-zoznam.component.css'],
  selector: 'app-vakcina-zoznam'
})
export class VakcinaZoznamComponent {

  constructor() {
  }

  @Input()
  vakciny: ZoznamVakcin[] = [];

  @Output()
  upravVakcinu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazVakcinu: EventEmitter<number> = new EventEmitter<number>();

  uprav(vakcinaId?: number): void {
    this.upravVakcinu.emit(vakcinaId);
  }

  zmaz(vakcinaId?: number): void {
    this.vymazVakcinu.emit(vakcinaId);
  }
}
