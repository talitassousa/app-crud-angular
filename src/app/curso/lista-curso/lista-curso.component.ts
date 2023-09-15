import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../curso.service';
import { DiasCursoEnum } from 'src/app/models/diasCursoEnum';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css'],
  providers: [MessageService]
})
export class ListaCursoComponent implements OnInit {
  cursos: Curso[] = []

  curso = new Curso()

  constructor(
    private service: CursoService,
    private MessageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.pesquisarTodos()
  }

  pesquisarTodos() {
    this.service.pesquisarTodos().subscribe({
      next: (response) => {
        this.cursos = [...response]
        this.cursos.forEach(curso => {
          if (curso.dias == 'SEGUNDA_QUARTA') {
            curso.dias = DiasCursoEnum.SEGUNDA_QUARTA;
            return;
          }
          if (curso.dias == 'TERCA_QUINTA') {
            curso.dias = DiasCursoEnum.TERCA_QUINTA;
            return
          }
          if (curso.dias == 'QUARTA_SEXTA') {
            curso.dias = DiasCursoEnum.QUARTA_SEXTA;
            return
          }
        });
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  excluirCurso(id: number) {
    this.service.excluirCurso(id).subscribe({
      next: (response) => {
        this.curso = { ...response }
        this.MessageService.add({ key: 'bc', severity: 'error', summary: 'Curso excluido' });
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
