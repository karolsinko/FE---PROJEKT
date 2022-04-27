import {Component, Input} from '@angular/core';
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";

@Component({
  selector: 'app-ockovanost-zoznam',
  templateUrl: './ockovanost-zoznam.component.html',
  styleUrls: ['./ockovanost-zoznam.component.css']
})
export class OckovanostZoznamComponent {

  @Input()
  vakciny: ZoznamVakcin[] = [];
  @Input()
  osoby: ZoznamOsob[] = [];

}
