import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url!: string


  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:8080/v1/cursos'
  }

  adicionarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.url}`, curso)
  }

  editarCurso(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.url}/${id}`, curso)
  }

  pesquisarTodos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.url}`)
  }
  pesquisarPorId(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.url}/${id}`)
  }

  excluirCurso(id: number): Observable<Curso> {
    return this.http.delete<Curso>(`${this.url}/${id}`)
  }

}
