import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vakcina} from '../../models/vakcina.model';

@Component({
  selector: 'app-vakcina-zoznam',
  templateUrl: './vakcina-zoznam.component.html',
  styleUrls: ['./vakcina-zoznam.component.css']
})
export class VakcinaZoznamComponent {

  @Input()
  vakciny: Vakcina[] = [];

  @Output()
  upravVakcinu: EventEmitter<Vakcina> = new EventEmitter<Vakcina>();

  @Output()
  vymazVakcinu: EventEmitter<Vakcina> = new EventEmitter<Vakcina>();

  uprav(vakcina: Vakcina): void {
    this.upravVakcinu.emit(vakcina);
  }

  zmaz(vakcina: Vakcina): void {
    this.vymazVakcinu.emit(vakcina);
  }
}
