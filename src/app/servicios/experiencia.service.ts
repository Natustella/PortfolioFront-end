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
    return this.httpClient.get<Experiencia>(this.URL + 'detalle');
    }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  }

  public update(id: number, experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.URL + `borrar/${id}`, experiencia);
  }

  public edit(experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.URL +  '/editar/${id}', experiencia);
  }
}
