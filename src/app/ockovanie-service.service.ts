import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ockovanie, OckovanieZoznam} from "../app/models/ockovanie.model";

@Injectable({
  providedIn: 'root'
})
export class OckovanieServiceService {
  private apiUrl = 'http://localhost:8080/api/ockovanie';

  constructor(private http: HttpClient) { }

  getOckovania(): Observable<OckovanieZoznam[]> {
    return this.http.get<OckovanieZoznam[]>(`${this.apiUrl}`);
  }

  getOckovanie(id: number): Observable<Ockovanie> {
    return this.http.get<Ockovanie>(`${this.apiUrl}/${id}`);
  }

  updateOckovanie(id: number, ockovanie: Ockovanie): Observable<Ockovanie> {
    return this.http.put<Ockovanie>(`${this.apiUrl}/${id}`, {id: ockovanie.id, meno: ockovanie.meno, priezvisko: ockovanie.priezvisko, rodCislo: ockovanie.rodCislo,
      nazov: ockovanie.nazov, datumOckovania: ockovanie.datumOckovania});
  }

  createOckovanie(ockovanie: Ockovanie): Observable<Ockovanie> {
    return this.http.post<Ockovanie>(`${this.apiUrl}`, {id: ockovanie.id, meno: ockovanie.meno, priezvisko: ockovanie.priezvisko, rodCislo: ockovanie.rodCislo,
      nazov: ockovanie.nazov, datumOckovania: ockovanie.datumOckovania});
  }

  deleteOckovanie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
