import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evalBoolean'
})

export class evalBoolean implements PipeTransform {

  transform(isIt : boolean): string {
    return isIt ? 'Sí' : 'No'
  }

}
