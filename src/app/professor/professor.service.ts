import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor';

// Comando para fazer requisição dos dados no BackEnd;
// Url serve para fazer comunicação com o banco de dados;

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url!: string


  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:8080/v1/professor'
  }

  

  adicionarProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(`${this.url}`, professor)
  }

  editarProfessor(id: number, professor: Professor): Observable<Professor> {
    return this.http.put<Professor>(`${this.url}/${id}`, professor)
  }

  pesquisarTodosProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}`)
  }
  
  pesquisarProfessorPorId(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.url}/${id}`)
  }

  excluirProfessor(id: number): Observable<Professor> {
    return this.http.delete<Professor>(`${this.url}/${id}`)
  }
}