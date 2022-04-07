import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vakcina,ZoznamVakcin} from "./app/models/vakcina.model";

@Injectable({
  providedIn: 'root'
})
export class VakcinaServiceService {

  private apiUrl = 'http://localhost:8080/api/vakcina';

  constructor(private http: HttpClient) { }

  getVakciny(): Observable<ZoznamVakcin[]> {
    return this.http.get<ZoznamVakcin[]>(`${this.apiUrl}`);
  }

  getVakcina(id: string): Observable<Vakcina> {
    return this.http.get<Vakcina>(`${this.apiUrl}/${id}`);
  }

  createVakcina(vakcina: Vakcina): Observable<Vakcina> {
    return this.http.post<Vakcina>(`${this.apiUrl}`, {nazov: vakcina.nazov, pocet_davok: vakcina.pocet_davok});
  }

}