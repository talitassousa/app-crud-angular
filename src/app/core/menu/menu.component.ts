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
      label: 'Lista de Usuarios',
      icon: 'pi pi-user',
      routerLink: '/usuarios'
    }, {
      label: 'Cadastrar',
      icon: 'pi pi-user-plus',
      items: [
        { label: 'curso', icon: 'pi pi-book', routerLink: '/cursos' },
        { label: 'usuario', icon: 'pi pi-plus-circle', routerLink: '/usuarios/cadastrar' }
      ]

    },
    {
      label: 'Professor',
      icon: 'pi pi-user-edit',
      routerLink: '/professor'
    }

    ]

  }

}


