import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from '../professor.service';


@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css'],
  providers: [MessageService]
})
export class ListaProfessorComponent implements OnInit {

  professores: Professor[] = []

  professor = new Professor()

  constructor(
    private service: ProfessorService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.pesquisarTodosProfessores()

  }

  pesquisarTodosProfessores() {
    this.service.pesquisarTodosProfessores().subscribe({
      next: (response) => {
        this.professores = [...response]
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  excluirProfessor(id: number) {
    this.service.excluirProfessor(id).subscribe({
      next: (response) => {
        this.professor = { ...response }
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Professor excluido' });
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
