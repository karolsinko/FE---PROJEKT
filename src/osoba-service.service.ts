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

  createOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, osoba);
  }
  getOsoba(id: string): Observable<Osoba> {
    return this.http.get<Osoba>(`${this.apiUrl}/${id}`);
  }

  deleteOsoba(id: string):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateOsoba(id: string, osoba: Osoba): Observable<Osoba>{
    return this.http.put<Osoba>(`${this.apiUrl}/${id}`, osoba);
  }


}
