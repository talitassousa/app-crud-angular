import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Curso } from '../models/curso';
import { Professor } from '../models/professor';
import { ProfessorService } from '../professor/professor.service';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [MessageService]
})


export class CursoComponent implements OnInit {

  professores: Professor[] = [];
  professor: Professor = new Professor();
  curso: Curso = new Curso();

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private professorService: ProfessorService) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.pesquisarPorId(id)
    }

    this.pesquisarTodosProfessores()
  }

  salvarEditar(id: number, curso: Curso) {
    if (this.route.snapshot.paramMap.get('id')) {
      this.editar(id, curso)
    } else {
      this.salvar(curso)
    }
  }

  salvar(curso: Curso) {

    this.cursoService.adicionarCurso(curso).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Successo', detail: 'Você foi matriculado!' });
        setTimeout(() => {
          this.router.navigate(['/cursos'])
        }, 2000);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



  editar(id: number, curso: Curso) {

    this.cursoService.editarCurso(id, curso).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Editado', detail: 'Curso editado com sucesso!' });
        setTimeout(() => {
          this.router.navigate(['/cursos'])
        }, 2000);
      },
      error: (err) => {
        console.log(err)
        alert('Erro ao tentar editar!')
      }
    })
  }


  pesquisarPorId(id: number) {

    this.cursoService.pesquisarPorId(id).subscribe({
      next: (response) => {
        console.log(response);
        this.curso = response
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

  pesquisarTodosProfessores() {
    this.professorService.pesquisarTodosProfessores().subscribe({
      next: (response) => {
        this.professores = [...response]
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

