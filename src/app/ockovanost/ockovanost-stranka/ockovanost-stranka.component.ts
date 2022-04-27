import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";
import {OsobaServiceService} from "../../../osoba-service.service";
import {VakcinaServiceService} from "../../../vakcina-service.service";

@Component({
  selector: 'app-ockovanost-stranka',
  templateUrl: './ockovanost-stranka.component.html',
  styleUrls: ['./ockovanost-stranka.component.css']
})
export class OckovanostStrankaComponent implements OnInit {

  constructor(private router: Router, private osobaService: OsobaServiceService, private vakcinaService: VakcinaServiceService) { }

  vakciny: ZoznamVakcin[] = [];
  osoby: ZoznamOsob[] = [];

  ngOnInit(): void {
    this.obnovitOsoby();
    this.obnovitVakciny();
  }

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
}
