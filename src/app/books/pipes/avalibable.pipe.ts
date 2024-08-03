import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evalAva'
})

export class evalAva implements PipeTransform {

  transform(isIt : boolean): string {
    return isIt ? 'Disponible' : 'No disponible'
  }

}
