import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient:HttpClient) { }

  public getExperiencia(): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + 'traer')
  }

  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `detalle/${id}`);
    }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }

  public edit(id: number, experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.URL +  `editar/${id}`, experiencia);
    }
}
