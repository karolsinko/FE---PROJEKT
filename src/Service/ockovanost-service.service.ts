import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ockovanost, ZoznamOckovanosti} from "../app/models/ockovanost.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OckovanostServiceService{

  private apiUrl = 'http://localhost:8080/api/ockovanost';

  constructor(private http: HttpClient) { }

  getOckovanosti(): Observable<ZoznamOckovanosti[]> {
    return this.http.get<ZoznamOckovanosti[]>(`${this.apiUrl}`);
  }

  getOckovanost(ockovanostId: number): Observable<Ockovanost> {
    return this.http.get<Ockovanost>(`${this.apiUrl}/${ockovanostId}`);
  }

  createOckovanost(ockovanost: Ockovanost): Observable<Ockovanost> {
    return this.http.post<Ockovanost>(`${this.apiUrl}`, ockovanost);
  }

  updateOckovanost(ockovanostId: number, ockovanost: Ockovanost): Observable<Ockovanost>{
    return this.http.put<Ockovanost>(`${this.apiUrl}/${ockovanostId}`, ockovanost);
  }

  deleteOckovanost(ockovanostId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${ockovanostId}`);
  }
}
