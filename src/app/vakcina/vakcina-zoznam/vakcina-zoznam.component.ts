import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ZoznamVakcin} from '../../models/vakcina.model';
import {PageEvent} from "@angular/material/paginator";

@Component({
  templateUrl: './vakcina-zoznam.component.html',
  styleUrls: ['./vakcina-zoznam.component.css'],
  selector: 'app-vakcina-zoznam'
})
export class VakcinaZoznamComponent {

  length = 500;
  pageSize = 5;
  pageIndex = 0;

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
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
