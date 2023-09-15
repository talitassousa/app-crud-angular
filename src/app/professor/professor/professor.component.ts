import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  providers: [MessageService]
})
export class ProfessorComponent implements OnInit {

  professor: Professor = new Professor()

  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.pesquisarProfessorPorId(id)
    }
  }

  salvarEditar(id: number, professor: Professor) {
    if (this.route.snapshot.paramMap.get('id')) {
      this.editar(id, professor)
    } else {
      this.salvar(professor)
    }
  }

  salvar(professor: Professor) {

    this.professorService.adicionarProfessor(professor).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Successo', detail: 'Professor adicionado com sucesso!' });
        setTimeout(() => {
          this.router.navigate(['/professores'])
        }, 2000);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editar(id: number, professor: Professor) {

    this.professorService.editarProfessor(id, professor).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Editado', detail: 'Professor editado com sucesso!' });
        setTimeout(() => {
          this.router.navigate(['/professores'])
        }, 2000);
      },
      error: (err) => {
        console.log(err)
        alert('Erro ao tentar editar!')
      }
    })
  }

  pesquisarProfessorPorId(id: number) {

    this.professorService.pesquisarProfessorPorId(id).subscribe({
      next: (response) => {
        console.log(response);
        this.professor = response
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

}

