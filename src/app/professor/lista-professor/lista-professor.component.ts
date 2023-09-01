import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent implements OnInit {

  professor: Professor[] = []

  constructor(
    private service: ProfessorService
  ) { }

  ngOnInit(): void {
    this.pesquisarTodos()

  }
  
  pesquisarTodos() {
    this.service.pesquisarTodos().subscribe({
      next: (response) => {
        this.professor = [...response]
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deletar() {
    alert('Você deletou!')
  }

}
