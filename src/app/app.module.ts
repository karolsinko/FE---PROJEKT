import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OsobaFormularComponent } from './osoba/osoba-formular/osoba-formular.component';
import {OsobaStrankaComponent } from './osoba/osoba-stranka/osoba-stranka.component';
import {OsobaZoznamComponent} from "./osoba/osoba-zoznam/osoba-zoznam.component";
import {VakcinaFormularComponent} from "./vakcina/vakcina-formular/vakcina-formular.component";
import {VakcinaStrankaComponent} from "./vakcina/vakcina-stranka/vakcina-stranka.component";
import {VakcinaZoznamComponent} from "./vakcina/vakcina-zoznam/vakcina-zoznam.component";
import {MenuComponent} from "./menu/menu.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    OsobaStrankaComponent,
    OsobaFormularComponent,
    OsobaZoznamComponent,
    VakcinaFormularComponent,
    VakcinaStrankaComponent,
    VakcinaZoznamComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
