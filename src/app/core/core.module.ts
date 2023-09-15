import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsuarioService } from "../usuario/usuario.service";
import { MenuComponent } from './menu/menu.component';

import { MenubarModule } from 'primeng/menubar';
import { CursoService } from "../curso/curso.service";
import { ProfessorService } from "../professor/professor.service";


@NgModule({
  imports: [CommonModule,
    MenubarModule],
  exports: [MenuComponent],
  providers: [UsuarioService, CursoService, ProfessorService],
  declarations: [
    MenuComponent,
  ]
})

export class CoreModule { }