import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ZoznamOckovanosti} from "../../models/ockovanost.model";

@Component({
  selector: 'app-ockovanost-zoznam',
  templateUrl: './ockovanost-zoznam.component.html',
  styleUrls: ['./ockovanost-zoznam.component.css']
})
export class OckovanostZoznamComponent{

  @Input()
  ockovania: ZoznamOckovanosti[] = [];

  @Output()
  upravOckovanie: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazOckovanie: EventEmitter<number> = new EventEmitter<number>();


  uprav(id: number): void {
    this.upravOckovanie.emit(id);
  }

  vymaz(id: number): void {
    this.vymazOckovanie.emit(id);
  }

}
