import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from './menu/menu.component';
import {OsobaStrankaComponent} from "./osoba/osoba-stranka/osoba-stranka.component";
import {VakcinaStrankaComponent} from "./vakcina/vakcina-stranka/vakcina-stranka.component";

const routes: Routes = [
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'vakcina',
    component: VakcinaStrankaComponent
  },
  {
    path: '',
    component: MenuComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
