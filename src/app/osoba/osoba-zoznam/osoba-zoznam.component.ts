import {EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from '../../models/osoba.model';
import {Component} from "@angular/core";

@Component({
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css'],
  selector: 'app-osoba-zoznam'
})
export class OsobaZoznamComponent {

  @Input()
  osoby: Osoba[] = [];

  @Output()
  upravOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  @Output()
  vymazOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  uprav(osoba: Osoba): void {
    this.upravOsobu.emit(osoba);
  }

  zmaz(osoba: Osoba): void {
    this.vymazOsobu.emit(osoba);
  }
}
