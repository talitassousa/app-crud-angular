import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
  providers: [MessageService]
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = []

  usuario = new Usuario()

  constructor(
    private service: UsuarioService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    // this.usuarios = new Array<Usuario>()
    this.pesquisarTodos()
  }

  pesquisarTodos() {
    this.service.pesquisarTodos().subscribe({
      next: (response) => {
        this.usuarios = [...response]
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  excluirUsuario(id: number) {
    this.service.excluirUsuario(id).subscribe({
      next: (response) => {
        this.usuario = { ...response }
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Usuario excluido' });
        setTimeout(() => {
          return window.location.reload()
        }, 1000);

      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
