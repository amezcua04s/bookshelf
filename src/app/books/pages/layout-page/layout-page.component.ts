import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../auth/interfaces/user-interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label : 'Generos', icon : 'label',  url : './list'},
    { label : 'Autores', icon : 'person', url : './new-book'},
    { label : 'Libros',  icon : 'book 4', url : './search'},
  ];

  constructor(
    private auth : AuthService,
    private router : Router
  ){}

  get user() : User | undefined{
    return  this.auth.currentUser;
  }

  onLogout(){
    this.auth.logout();
    this.router.navigate(['/auth/login'])
  }


}
