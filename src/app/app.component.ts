import { Component } from '@angular/core';

enum MENU{OSOBA,VAKCINA}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu=MENU;
  actualMenu: MENU= MENU.OSOBA;

  osoba={ID_osoba:"",meno:"",priezvisko:"",rok_narodenia:"",rodne_cislo:"",telefonne_cislo:"",bydlisko:"",pohlavie:""}
  vakcina={menoVakcina:"",davka:"",datum:"",dostupnost:""}
  borrowing={borrowingId:"",borrowingBook:"",borrowingUser:""}
  osoby:any=[];
  vakciny:any=[];
  borrowings:any=[];


  public pridaj(): void {
    if (this.actualMenu == this.menu.OSOBA) {
      this.osoby.push({
        ID_osoba: this.osoba.ID_osoba,
        meno: this.osoba.meno,
        priezvisko: this.osoba.priezvisko,
        rok_narodenia: this.osoba.rok_narodenia,
        rodne_cislo: this.osoba.rodne_cislo,
        telefonne_cislo: this.osoba.telefonne_cislo,
        bydlisko: this.osoba.bydlisko,
        pohlavie:this.osoba.pohlavie
      })
    }else if (this.actualMenu == this.menu.VAKCINA){
      this.vakciny.push({
        menoVakcina: this.vakcina.menoVakcina,
        davka: this.vakcina.davka,
        datum:this.vakcina.datum,
        dostupnost:this.vakcina.dostupnost
      })
    }
  }

  public openMenu(m:MENU){
    this.actualMenu=m;
  }

}
