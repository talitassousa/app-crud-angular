import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';


@NgModule({
  declarations: [ListaCursoComponent, CursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    TableModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ToastModule,
    DropdownModule
  ]

})
export class CursoModule { }
