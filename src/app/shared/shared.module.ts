import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { evalBool } from './pipes/is-true.pipe';



@NgModule({
  declarations: [
    Error404PageComponent,
    evalBool
  ],
  exports : [
    Error404PageComponent,
    evalBool
  ]
})
export class SharedModule { }
