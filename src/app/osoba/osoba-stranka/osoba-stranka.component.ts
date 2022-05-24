import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Osoba, ZoznamOsob} from '../../models/osoba.model';
import {OsobaServiceService} from "../../../Service/osoba-service.service";

@Component({
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css'],
  selector: 'app-osoba-stranka'
})
export class OsobaStrankaComponent implements OnInit{

  osoby: ZoznamOsob[] = [];

  osobaNaUpravu?: Osoba;

  constructor(private router: Router, private osobaService: OsobaServiceService) { }

  ngOnInit(): void {
    this.obnovitOsoby();
  }

  obnovitOsoby(): void {
    this.osobaService.getOsoby().subscribe(data => {
      console.log('Prislo: ', data);
      this.osoby = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba): void {
    this.osobaService.createOsoba(osoba).subscribe(data => {
      this.obnovitOsoby();
    });
  }

  uprav(osoba: Osoba): void {
    if(osoba.id !== undefined){
      this.osobaService.updateOsoba(osoba.id, osoba).subscribe(() =>{
        this.obnovitOsoby();
      });
    }
  }

  upravZoZoznamu(osobaId: number): void {
    this.osobaService.getOsoba(osobaId).subscribe(data =>{
      this.osobaNaUpravu = data;
    });
  }

  zmazZoZoznamu(osobaId: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.osobaService.deleteOsoba(osobaId).subscribe(() =>{
        this.obnovitOsoby();
      });
    }
  }
}
