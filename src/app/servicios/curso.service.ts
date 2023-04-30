import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  URL = 'http://localhost:8080/curso/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Curso>{
    return this.httpClient.get<Curso>(this.URL + `detalle/${id}`);
    }

  public save(curso: Curso):Observable<any>{
      return this.httpClient.post<any>(this.URL + 'crear', curso);
    }
  
  public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }
  
  public edit(curso:Curso):Observable<Curso>{
        return this.httpClient.put<Curso>(this.URL + 'editar/', curso);
      }

   getCursoId(id:number) {
    return this.httpClient.get<Curso>(this.URL + "/" + id)
   }

   updateCurso(curso:Curso) {
    return this.httpClient.put<Curso>(this.URL + "/" + curso.id, curso)
   }

}

