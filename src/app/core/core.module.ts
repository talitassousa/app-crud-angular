import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsuarioService } from "../usuario/usuario.service";
import { MenuComponent } from './menu/menu.component';

import { MenubarModule } from 'primeng/menubar';


@NgModule({
  imports: [CommonModule,
    MenubarModule],
  exports: [MenuComponent],
  providers: [UsuarioService],
  declarations: [
    MenuComponent,

  ]
})

export class CoreModule { }