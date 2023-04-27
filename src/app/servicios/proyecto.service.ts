import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyecto/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detalle/${id}`);
    }

  public save(proyecto: Proyecto):Observable<any>{
      return this.httpClient.post<any>(this.URL + 'crear', proyecto);
    }
  
  public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
      }

  public edit(id: number, proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.URL +  `editar/${id}`, proyecto);
    }
}

