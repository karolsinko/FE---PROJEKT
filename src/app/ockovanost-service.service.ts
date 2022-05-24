import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ockovanost, ZoznamOckovanosti} from "./models/ockovanost.model";

@Injectable({
  providedIn: 'root'
})
export class OckovanostServiceService {
  private apiUrl = 'http://localhost:8080/api/ockovanie';

  constructor(private http: HttpClient) { }

  getOckovanosti(): Observable<ZoznamOckovanosti[]> {
    return this.http.get<ZoznamOckovanosti[]>(`${this.apiUrl}`);
  }

  getOckovanost(id: number): Observable<Ockovanost> {
    return this.http.get<Ockovanost>(`${this.apiUrl}/${id}`);
  }

  updateOckovanost(id: number, ockovanost: Ockovanost): Observable<Ockovanost> {
    return this.http.put<Ockovanost>(`${this.apiUrl}/${id}`, {id: ockovanost.id, osobaId: ockovanost.osoba.id, vakcinaId: ockovanost.vakcina.id, datumOckovania: ockovanost.datumOckovania});
  }

  createOckovanost(ockovanost: Ockovanost): Observable<Ockovanost> {
    return this.http.post<Ockovanost>(`${this.apiUrl}`, {id: ockovanost.id, osobaId: ockovanost.osoba.id, vakcinaId: ockovanost.vakcina.id, datumOckovania: ockovanost.datumOckovania});
  }

  deleteOckovanost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
