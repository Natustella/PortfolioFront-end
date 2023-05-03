import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Redes } from '../model/redes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  URL = 'http://localhost:8080/redes/';

  constructor(private httpClient: HttpClient) { }
  public getRedes(): Observable<Redes> {
    return this.httpClient.get<Redes>(this.URL + 'traer')
  }

  public detail(id: number): Observable<Redes> {
    return this.httpClient.get<Redes>(this.URL + `detalle/${id}`);
  }

  public lista(): Observable<Redes[]> {
    return this.httpClient.get<Redes[]>(this.URL + 'lista');
  }

  public save(redes: Redes): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', redes);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public edit(redes: Redes): Observable<Redes> {
    return this.httpClient.put<Redes>(this.URL + 'editar/', redes);
  }

  getRedesId(id: number) {
    return this.httpClient.get<Redes>(this.URL + "/" + id)
  }

  updateRedes(redes: Redes) {
    return this.httpClient.put<Redes>(this.URL + "/" + redes.id, redes)
  }
}

