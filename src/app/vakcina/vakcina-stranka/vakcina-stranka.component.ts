import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ZoznamVakcin, Vakcina} from "../../models/vakcina.model";
import {VakcinaServiceService} from "../../../vakcina-service.service";

@Component({
  templateUrl: './vakcina-stranka.component.html',
  styleUrls: ['./vakcina-stranka.component.css'],
  selector: 'app-vakcina-stranka'
})
export class VakcinaStrankaComponent implements OnInit{

  vakciny: ZoznamVakcin[] = [];

  vakcinaNaUpravu?: Vakcina;

  constructor(private router: Router, private vakcinaService: VakcinaServiceService) { }

  ngOnInit(): void {
    this.obnovitVakciny();
  }

  obnovitVakciny(): void {
    this.vakcinaService.getVakciny().subscribe(data => {
      console.log('Prislo: ', data);
      this.vakciny = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vakcina: Vakcina): void {
    this.vakcinaService.createVakcina(vakcina).subscribe(data => {
      this.obnovitVakciny();
    });
  }

  uprav(vakcina: Vakcina): void {
    if(vakcina.id !== undefined){
      this.vakcinaService.updateVakcina(vakcina.id, vakcina).subscribe(data =>{
        this.obnovitVakciny();
      });
    }
  }

  upravZoZoznamu(vakcinaId: number): void {
    this.vakcinaService.getVakcina(vakcinaId).subscribe(data =>{
      this.vakcinaNaUpravu = data;
    });
  }

  zmazZoZoznamu(vakcinaId: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.vakcinaService.deleteVakcina(vakcinaId).subscribe(data =>{
        this.obnovitVakciny();
      });
    }
  }
}
