import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ListaProfessorComponent } from './lista-professor/lista-professor.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor/professor.component';


@NgModule({
  declarations: [ListaProfessorComponent, ProfessorComponent],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    ToastModule
  ]
})
export class ProfessorModule { }
