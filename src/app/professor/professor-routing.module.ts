import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProfessorComponent } from './lista-professor/lista-professor.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProfessorComponent
  },
  {
    path: 'cadastro',
    component: ProfessorComponent
  },
  {
    path:':id',
    component: ProfessorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
