import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ZoznamVakcin} from "../../models/vakcina.model";
import {ZoznamOsob} from "../../models/osoba.model";
import {OsobaServiceService} from "../../../Service/osoba-service.service";
import {VakcinaServiceService} from "../../../Service/vakcina-service.service";
import {OckovanostServiceService} from "../../../Service/ockovanost-service.service";
import {Ockovanost} from "../../models/ockovanost.model";


@Component({
  selector: 'app-ockovanost-stranka',
  templateUrl: './ockovanost-stranka.component.html',
  styleUrls: ['./ockovanost-stranka.component.css']
})
export class OckovanostStrankaComponent implements OnInit {

  constructor(private router: Router, private osobaService: OsobaServiceService, private vakcinaService: VakcinaServiceService, private ockovanostService: OckovanostServiceService) { }

  vakciny: ZoznamVakcin[] = [];
  osoby: ZoznamOsob[] = [];
  ockovania: Ockovanost[] = [];

  ockovanostNaUpravu?: Ockovanost;

  chodSpat(): void {
    this.router.navigate(['']);
  }

  obnovitOsoby(): void {
    this.osobaService.getOsoby().subscribe(data => {
      console.log('Prislo osoby: ', data);
      this.osoby = data;
    });
  }

  obnovitVakciny(): void {
    this.vakcinaService.getVakciny().subscribe(data => {
      console.log('Prislo vakciny: ', data);
      this.vakciny = data;
    });
  }

  obnovitOckovanie(): void {
    this.ockovanostService.getOckovanosti().subscribe(data => {
      console.log('Prislo ockovania: ', data);
      this.ockovania = data;
    });
  }

  ngOnInit(): void {
    this.obnovitOsoby();
    this.obnovitVakciny();
    this.obnovitOckovanie();
  }

  pridaj(ockovanost: Ockovanost): void {
    this.ockovanostService.createOckovanost(ockovanost).subscribe(data => {
      this.obnovitOckovanie();
    });
  }

  uprav(ockovanost: Ockovanost): void {
    if(ockovanost.id !== undefined){
      this.ockovanostService.updateOckovanost(ockovanost.id, ockovanost).subscribe(data =>{
        this.obnovitOckovanie();
      });
    }
  }

  upravZoZoznamu(ockovanostId: number): void {
    this.ockovanostService.getOckovanost(ockovanostId).subscribe(data =>{
      this.ockovanostNaUpravu = data;
    });
  }

  zmazZoZoznamu(ockovanostId: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.ockovanostService.deleteOckovanost(ockovanostId).subscribe(data =>{
        this.obnovitOckovanie();
      });
    }
  }

}
