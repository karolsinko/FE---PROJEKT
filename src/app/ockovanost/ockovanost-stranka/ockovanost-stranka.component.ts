import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ockovanost-stranka',
  templateUrl: './ockovanost-stranka.component.html',
  styleUrls: ['./ockovanost-stranka.component.css']
})
export class OckovanostStrankaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }
}
