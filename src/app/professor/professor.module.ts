import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ProfessorRoutingModule } from './professor-routing.module';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';


import { ListaProfessorComponent } from './lista-professor/lista-professor.component';







@NgModule({
  declarations: [ListaProfessorComponent],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    TableModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class ProfessorModule { }
