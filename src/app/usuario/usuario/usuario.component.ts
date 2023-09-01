import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService]
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.pesquisarPorId(id)
    }
  }

  salvarEditar(id: number, usuario: Usuario) {
    if (this.route.snapshot.paramMap.get('id')) {
      this.editar(id, usuario)
    } else {
      this.salvar(usuario)
    }
  }

  salvar(usuario: Usuario) {

    this.usuarioService.adicionarUsuario(usuario).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Successo', detail: 'Usuario adicionado com sucesso!' });
        setTimeout(() => {
          this.router.navigate(['/usuarios'])
        }, 2000);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editar(id: number, usuario: Usuario) {

    this.usuarioService.editarUsuario(id, usuario).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Editado', detail: 'Usuario editado com sucesso!' });
        setTimeout(() => {
          this.router.navigate(['/usuarios'])
        }, 2000);
      },
      error: (err) => {
        console.log(err)
        alert('Erro ao tentar editar!')
      }
    })
  }

  pesquisarPorId(id: number) {

    this.usuarioService.pesquisarPorId(id).subscribe({
      next: (response) => {
        console.log(response);
        this.usuario = response
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
