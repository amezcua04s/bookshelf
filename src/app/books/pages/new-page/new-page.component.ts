import { Component, signal } from "@angular/core";
import { __values } from "tslib";


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  public themes = [
    {id : 'Filosofía'},
    {id : 'Distopía'}
  ];

  public biRes = [
    {id : 'Sí'},
    {id : 'No'}
  ];

  owned = signal(false);
  readed = signal(false);

  toggleOwned() {
    this.owned.update( value => !value );
  }

  toggleReaded(){
    this.readed.update( value => !value );
  }

}
