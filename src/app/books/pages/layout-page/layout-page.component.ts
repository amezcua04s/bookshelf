import { Component } from '@angular/core';

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

}
