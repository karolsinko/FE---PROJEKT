import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Osoba} from '../../models/osoba.model';
import {OsobaServiceService} from "../../../osoba-service.service";
import {Subscription} from "rxjs";


@Component({
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css'],
  selector: 'app-osoba-stranka'
})
export class OsobaStrankaComponent implements OnInit, OnDestroy{

  osoby: Osoba[] = [];

  osobaNaUpravu?: Osoba;

  private subscription: Subscription = new Subscription();
  constructor(private router: Router, private osobaService: OsobaServiceService) { }

  ngOnInit(): void {
    this.obnovitOsoby();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  obnovitOsoby(): void {
      this.subscription.add(this.osobaService.getOsoby().subscribe(data =>{
        console.log('prislo:', data);
        this.osoby = data;
      }));
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba): void {
    this.subscription.add(this.osobaService.createOsoba(osoba).subscribe(data => {
      console.log('prislo', data);
      this.obnovitOsoby()
    }));
  }

  uprav(osoba: Osoba): void {
      if (osoba.id !== undefined) {
        this.subscription.add(this.osobaService.updateOsoba(osoba.id, osoba).subscribe(data => {
          console.log('prislo', data);
          this.obnovitOsoby()
        }));
    }
  }

  upravZoZoznamu(id: string): void {
    this.subscription.add(this.osobaService.getOsoba(id).subscribe(data => {
      console.log('prislo', data);
      this.osobaNaUpravu = data;
    }));
  }

  zmazZoZoznamu(id: string): void {
        this.subscription.add(this.osobaService.deleteOsoba(id).subscribe(data => {
          this.obnovitOsoby();
        }));
  }
}
