
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ZoznamOckovanosti} from "../../models/ockovanost.model";

@Component({
  selector: 'app-ockovanost-zoznam',
  templateUrl: './ockovanost-zoznam.component.html',
  styleUrls: ['./ockovanost-zoznam.component.css']
})
export class OckovanostZoznamComponent {

  @Input()
  ockovania: ZoznamOckovanosti[] = [];

  @Output()
  upravOckovanost: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazOckovanost: EventEmitter<number> = new EventEmitter<number>();

  uprav(ockovanostId?: number): void {
    this.upravOckovanost.emit(ockovanostId);
  }

  zmaz(ockovanostId?: number): void {
    this.vymazOckovanost.emit(ockovanostId);
  }


}
