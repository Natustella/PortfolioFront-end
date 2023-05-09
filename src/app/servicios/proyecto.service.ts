import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prd';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL: string = environment.apiURL + "proyecto/";

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.URL + `detalle/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public edit(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(this.URL + 'editar/', proyecto);
  }

  getProyectoId(id: number) {
    return this.httpClient.get<Proyecto>(this.URL + "/" + id)
  }

  updateProyecto(proyecto: Proyecto) {
    return this.httpClient.put<Proyecto>(this.URL + "/" + proyecto.id, proyecto)
  }
}

