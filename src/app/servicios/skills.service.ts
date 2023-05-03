import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + `detalle/${id}`);
  }
  public save(skills: Skills): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', skills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public edit(skills: Skills): Observable<Skills> {
    return this.httpClient.put<Skills>(this.URL + 'editar/', skills);
  }

  getSkillsId(id: number) {
    return this.httpClient.get<Skills>(this.URL + "/" + id)
  }

  updateSkills(skills: Skills) {
    return this.httpClient.put<Skills>(this.URL + "/" + skills.id, skills)
  }
}
