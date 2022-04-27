import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Ockovanie, OckovanieZoznam} from "../../models/ockovanie.model";
import {OckovanieServiceService} from "../../ockovanie-service.service";

@Component({
  selector: 'app-ockovanost-stranka',
  templateUrl: './ockovanost-stranka.component.html',
  styleUrls: ['./ockovanost-stranka.component.css']
})
export class OckovanostStrankaComponent{

  constructor(private router: Router, private ockovanieService: OckovanieServiceService) { }

  ockovania: OckovanieZoznam[] = [];

  ockovanieNaUpravu?: Ockovanie;


  ngOnInit(): void {
    this.refreshOckovanie();
  }

  refreshOckovanie(): void {
    this.ockovanieService.getOckovania().subscribe(data => {
      console.log('prislo:', data);
      this.ockovania = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(ockovanie: Ockovanie): void {
    this.ockovanieService.createOckovanie(ockovanie).subscribe(data => {
      this.refreshOckovanie();
    });
  }
  uprav(ockovanie: Ockovanie): void {
    if (ockovanie.id !== undefined) {
      this.ockovanieService.updateOckovanie(ockovanie.id, ockovanie).subscribe(data => {
        this.refreshOckovanie();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.ockovanieService.getOckovanie(id).subscribe(data => {
      this.ockovanieNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    this.ockovanieService.deleteOckovanie(id).subscribe(data => {
      this.refreshOckovanie();
    });
  }


}


