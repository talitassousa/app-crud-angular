import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

// Comando para fazer requisição dos dados no BackEnd;
// Url serve para fazer comunicação com o banco de dados;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url!: string


  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:8080/v1/usuario'
  }

  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}`, usuario)
  }

  editarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${id}`, usuario)
  }
  pesquisarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

  pesquisarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}`)
  }

  excluirUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.url}/${id}`)
  }


}
