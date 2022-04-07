import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Osoba,ZoznamOsob} from "./app/models/osoba.model";

@Injectable({
  providedIn: 'root'
})
export class OsobaServiceService {

  private apiUrl = 'http://localhost:8080/api/osoba';

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<ZoznamOsob[]> {
    return this.http.get<ZoznamOsob[]>(`${this.apiUrl}`);
  }

  getOsoba(id: string): Observable<Osoba> {
    return this.http.get<Osoba>(`${this.apiUrl}/${id}`);
  }

  createOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, {meno: osoba.meno, priezvisko: osoba.priezvisko, rok_nar: osoba.rok_nar, rod_cislo: osoba.rod_cislo, tel_cislo: osoba.tel_cislo, bydlisko: osoba.bydlisko, pohlavie: osoba.pohlavie});
  }

}
