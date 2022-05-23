import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OsobaFormularComponent } from './osoba/osoba-formular/osoba-formular.component';
import {OsobaStrankaComponent } from './osoba/osoba-stranka/osoba-stranka.component';
import {VakcinaFormularComponent} from "./vakcina/vakcina-formular/vakcina-formular.component";
import {VakcinaStrankaComponent} from "./vakcina/vakcina-stranka/vakcina-stranka.component";
import {VakcinaZoznamComponent} from "./vakcina/vakcina-zoznam/vakcina-zoznam.component";
import {MenuComponent} from "./menu/menu.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {OsobaZoznamComponent} from "./osoba/osoba-zoznam/osoba-zoznam.component";
import { PaginatorComponent } from './materials/paginator/paginator.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { StepperComponent } from './materials/stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { StepperTableComponent } from './materials/stepper-table/stepper-table.component';
import {MatTableModule} from "@angular/material/table";
import { OckovanostFormularComponent } from './ockovanost/ockovanost-formular/ockovanost-formular.component';
import { OckovanostStrankaComponent } from './ockovanost/ockovanost-stranka/ockovanost-stranka.component';
import { OckovanostZoznamComponent } from './ockovanost/ockovanost-zoznam/ockovanost-zoznam.component';
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    PaginatorComponent,
    StepperComponent,
    StepperTableComponent,
    OckovanostFormularComponent,
    OckovanostStrankaComponent,
    OckovanostZoznamComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
