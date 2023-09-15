import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    ListaUsuarioComponent,
    UsuarioComponent,
  ],
  imports: [

    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ToastModule

  ]
})
export class UsuarioModule { }
