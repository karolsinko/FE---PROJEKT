import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";
import {OsobaServiceService} from "../../../Service/osoba-service.service";
import {VakcinaServiceService} from "../../../Service/vakcina-service.service";
import {OckovanostServiceService} from "../../../Service/ockovanost-service.service";
import {ZoznamOckovanosti} from "../../models/ockovanost.model";

@Component({
  selector: 'app-ockovanost-stranka',
  templateUrl: './ockovanost-stranka.component.html',
  styleUrls: ['./ockovanost-stranka.component.css']
})
export class OckovanostStrankaComponent implements OnInit {

  constructor(private router: Router, private osobaService: OsobaServiceService, private vakcinaService: VakcinaServiceService, private ockovanostService: OckovanostServiceService) { }

  vakciny: ZoznamVakcin[] = [];
  osoby: ZoznamOsob[] = [];
  ockovania: ZoznamOckovanosti[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

  obnovitOsoby(): void {
    this.osobaService.getOsoby().subscribe(data => {
      console.log('Prislo: ', data);
      this.osoby = data;
    });
  }

  obnovitVakciny(): void {
    this.vakcinaService.getVakciny().subscribe(data => {
      console.log('Prislo: ', data);
      this.vakciny = data;
    });
  }

  obnovitOckovanie(): void {
    this.ockovanostService.getOckovanosti().subscribe(data => {
      console.log('Prislo: ', data);
      this.ockovania = data;
    });
  }

  ngOnInit(): void {
    this.obnovitOsoby();
    this.obnovitVakciny();
    this.obnovitOckovanie();
  }
}
