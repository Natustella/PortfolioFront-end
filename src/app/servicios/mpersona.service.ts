import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mpersona } from '../model/mpersona';
import { environment } from 'src/environments/environment.prd';

@Injectable({
  providedIn: 'root'
})
export class MpersonaService {
  URL: string = environment.apiURL + "persona/";
  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Mpersona> {
    return this.httpClient.get<Mpersona>(this.URL + 'traer')
  }

  public detail(id: number): Observable<Mpersona> {
    return this.httpClient.get<Mpersona>(this.URL + 'perfil');
  }

  public save(persona: Mpersona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public edit(persona: Mpersona): Observable<Mpersona> {
    return this.httpClient.put<Mpersona>(this.URL + 'editar/', persona);
  }

  public lista(): Observable<Mpersona[]> {
    return this.httpClient.get<Mpersona[]>(this.URL + 'traer');
  }

  public detalle(id: number): Observable<Mpersona> {
    return this.httpClient.get<Mpersona>(this.URL + `detalle/${id}`);
  }

  getPersonaId(id: number) {
    return this.httpClient.get<Mpersona>(this.URL + "/" + id)
  }

  updatePersona(persona: Mpersona) {
    return this.httpClient.put<Mpersona>(this.URL + "/" + persona.id, persona)
  }
}
