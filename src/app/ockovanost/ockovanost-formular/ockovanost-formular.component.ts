import {Component, Input, OnInit} from '@angular/core';
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";
import {ZoznamOckovanosti} from "../../models/ockovanost.model";

@Component({
  selector: 'app-ockovanost-formular',
  templateUrl: './ockovanost-formular.component.html',
  styleUrls: ['./ockovanost-formular.component.css']
})
export class OckovanostFormularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  public vakciny: ZoznamVakcin[] = [];
  @Input()
  public osoby: ZoznamOsob[] = [];
  @Input()
  public ockovania: ZoznamOckovanosti[] = [];
}
