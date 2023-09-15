import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] = []

  constructor() {

  }

  ngOnInit() {
    this.items = [{
      label: 'Lista de Usuários',
      icon: 'pi pi-user',
      routerLink: '/usuarios'
    },
    {
      label: 'Lista de cursos',
      icon: 'pi pi-book',
      routerLink: '/cursos'
    },
    {
      label: 'Lista de professores',
      icon: 'pi pi-user',
      routerLink: '/professores'
    },
    {
      label: 'Cadastrar',
      icon: 'pi pi-user-plus',
      items: [
        { label: 'usuario', icon: 'pi pi-plus-circle', routerLink: '/usuarios/cadastro' },
        { label: 'curso', icon: 'pi pi-book', routerLink: '/cursos/cadastro' },
        { label: 'professor', icon: 'pi pi-user-edit', routerLink: '/professores/cadastro'}
      ]
    },
    ]
  }

}


