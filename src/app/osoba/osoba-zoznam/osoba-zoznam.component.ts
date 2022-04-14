import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ZoznamOsob} from "../../models/osoba.model";

@Component({
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css'],
  selector: 'app-osoba-zoznam'
})
export class OsobaZoznamComponent {

  constructor() {
  }

  @Input()
  osoby: ZoznamOsob[] = [];

  @Output()
  upravOsobu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazOsobu: EventEmitter<number> = new EventEmitter<number>();

  uprav(osobaId?: number): void {
    this.upravOsobu.emit(osobaId);
  }

  zmaz(osobaId?: number): void {
    this.vymazOsobu.emit(osobaId);
  }
}
