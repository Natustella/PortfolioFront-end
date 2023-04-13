import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mpersona } from '../model/mpersona';

@Injectable({
  providedIn: 'root'
})
export class MpersonaService {
  URL = 'http://localhost:8080/persona/';
  constructor(private httpClient:HttpClient) { }

  public getPersona(): Observable<Mpersona>{
    return this.httpClient.get<Mpersona>(this.URL + 'perfil')
  }

  public detail(id: number):Observable<Mpersona>{
    return this.httpClient.get<Mpersona>(this.URL + 'perfil');
    }

  public lista():Observable<Mpersona[]>{
    return this.httpClient.get<Mpersona[]>(this.URL + 'traer');
  }

  public save(persona: Mpersona):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public update(id: number, persona:Mpersona):Observable<any>{
    return this.httpClient.put<any>(this.URL + `borrar/${id}`, persona);
  }

  public edit(persona: Mpersona):Observable<any>{
    return this.httpClient.put<any>(this.URL +  '/editar/${id}', persona);
  }
}
