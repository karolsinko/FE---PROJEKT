import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Vakcina, ZoznamVakcin} from '../../models/vakcina.model';
import {VakcinaServiceService} from "../../../vakcina-service.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './vakcina-stranka.component.html',
  styleUrls: ['./vakcina-stranka.component.css'],
  selector: 'app-vakcina-stranka'
})
export class VakcinaStrankaComponent implements OnInit, OnDestroy{

  vakciny: ZoznamVakcin[] = [];

  vakcinaNaUpravu?: Vakcina;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router,private vakcinaService: VakcinaServiceService) { }

  ngOnInit(): void {
    this.obnovitVakciny();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  obnovitVakciny(): void {
    this.subscription.add(this.vakcinaService.getVakciny().subscribe(data =>{
      console.log('prislo:', data);
      this.vakciny = data;
    }));
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vakcina: Vakcina): void {
    this.subscription.add(this.vakcinaService.createVakcina(vakcina).subscribe(data => {
      console.log('prislo', data);
      this.obnovitVakciny()
    }));
  }

  uprav(vakcina: Vakcina): void {
    if (vakcina.id !== undefined) {
      this.subscription.add(this.vakcinaService.updateVakcina(vakcina.id, vakcina).subscribe(data => {
        console.log('prislo', data);
        this.obnovitVakciny()
      }));
    }
  }

  upravZoZoznamu(id: string): void {
      this.subscription.add(this.vakcinaService.getVakcina(id).subscribe(data => {
        console.log('prislo', data);
        this.vakcinaNaUpravu = data;
      }));
  }

  zmazZoZoznamu(id: string): void {
    this.subscription.add(this.vakcinaService.deleteVakcina(id).subscribe(data => {
      this.obnovitVakciny();
    }));
  }
}
