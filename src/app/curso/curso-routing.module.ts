import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';

const routes: Routes = [

  {
    path: '',
    component: ListaCursoComponent
  },
  {
    path: 'cadastro',
    component: CursoComponent
  },
  {
    path:':id',
    component: CursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
