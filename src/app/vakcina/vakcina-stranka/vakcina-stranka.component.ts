import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Vakcina} from '../../models/vakcina.model';
import {VakcinaServiceService} from "../../../vakcina-service.service";

@Component({
  templateUrl: './vakcina-stranka.component.html',
  styleUrls: ['./vakcina-stranka.component.css'],
  selector: 'app-vakcina-stranka'
})
export class VakcinaStrankaComponent implements OnInit{

  vakciny: Vakcina[] = [];

  vakcinaNaUpravu?: Vakcina;

  constructor(private router: Router,private vakcinaService: VakcinaServiceService) { }

  ngOnInit(): void {
    this.obnovitVakciny();
  }

  obnovitVakciny(): void {
    this.vakcinaService.getVakciny().subscribe(data => {
      console.log('prislo:', data);
      this.vakciny = [];
      for (const d of data) {
        this.vakciny.push({ id: d.id, nazov: d.nazov, pocet_davok: d.pocet_davok});
      }
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vakcina: Vakcina): void {
    this.vakciny.push(vakcina);
  }

  uprav(vakcina: Vakcina): void {
    const index = this.vakciny.findIndex(vakcinaArray => vakcinaArray.id === vakcina.id);
    if (index !== -1) {
      this.vakciny[index] = vakcina;
    }
  }

  upravZoZoznamu(vakcina: Vakcina): void {
    this.vakcinaNaUpravu = vakcina;
  }

  zmazZoZoznamu(vakcina: Vakcina): void {
    const index = this.vakciny.findIndex(vakcinaArray => vakcinaArray.id === vakcina.id);
    if (index !== -1) {
      this.vakciny.splice(index, 1);
    }
  }
}
