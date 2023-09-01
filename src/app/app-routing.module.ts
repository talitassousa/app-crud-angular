import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioModule } from './usuario/usuario.module';
import { CursoModule } from './curso/curso.module';
import { ProfessorModule } from './professor/professor.module';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'usuarios'
  },
  {
    path: 'usuarios',
    loadChildren: () => UsuarioModule
  },
  {
    path: 'cursos',
    loadChildren: () => CursoModule
  },
  {
    path: 'professor',
    loadChildren: () => ProfessorModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
