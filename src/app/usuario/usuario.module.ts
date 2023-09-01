import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    ListaUsuarioComponent,
    UsuarioComponent,
   
    
  ],
  imports: [

    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    UsuarioRoutingModule,
    InputMaskModule,
    ToastModule

  ]
})
export class UsuarioModule { }
