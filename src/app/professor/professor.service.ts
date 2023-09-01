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

  pesquisarTodos(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}`)
  }
}