import { Component } from '@angular/core';
import {Router} from '@angular/router';

enum MENU { OSOBA, VAKCINA,OCKOVANOST, HOME}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  date=new Date();
  menu = MENU;

  constructor(private router: Router) { }

  public openMenu(m: MENU) {
    if (m === MENU.OSOBA) {
      this.router.navigate(['/osoba']);
    }else if(m=== MENU.VAKCINA){
      this.router.navigate(['/vakcina']);
        }else if(m=== MENU.OCKOVANOST){
        this.router.navigate(['/ockovanost']);
           }else if(m=== MENU.HOME){
            this.router.navigate(['/']);
    }
  }

}
