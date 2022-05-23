
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";
import {Ockovanost, ZoznamOckovanosti} from "../../models/ockovanost.model";
import {Router} from "@angular/router";
import {OckovanostServiceService} from "../../../Service/ockovanost-service.service";


@Component({
  selector: 'app-ockovanost-zoznam',
  templateUrl: './ockovanost-zoznam.component.html',
  styleUrls: ['./ockovanost-zoznam.component.css']
})
export class OckovanostZoznamComponent {

  ockovanostNaUpravu?: Ockovanost;

  constructor(private router: Router, private ockovanostService: OckovanostServiceService) { }

  @Input()
  public vakciny: ZoznamVakcin[] = [];
  @Input()
  public osoby: ZoznamOsob[] = [];
  @Input()
  public ockovania: ZoznamOckovanosti[] = [];

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
