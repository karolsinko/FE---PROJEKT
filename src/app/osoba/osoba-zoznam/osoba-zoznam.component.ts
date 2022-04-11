import {EventEmitter, Input, Output} from '@angular/core';
import {Osoba, ZoznamOsob} from '../../models/osoba.model';
import {Component} from "@angular/core";

@Component({
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css'],
  selector: 'app-osoba-zoznam'
})
export class OsobaZoznamComponent {

  @Input()
  osoby: ZoznamOsob[] = []

  @Output()
  upravOsobu: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  vymazOsobu: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  /*
  uprav(osoba: Osoba): void {
    this.upravOsobu.emit(osoba);
  }

  zmaz(osoba: Osoba): void {
    this.vymazOsobu.emit(osoba);
  }

   */
}
