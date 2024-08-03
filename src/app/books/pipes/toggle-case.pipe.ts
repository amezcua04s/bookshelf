import { Pipe, PipeTransform } from '@angular/core';
import { flush } from '@angular/core/testing';

@Pipe({
  name: 'toggleTitle'
})

export class toggleTitle implements PipeTransform {

  transform(value: string, option?: number) : string {
    /**
     * @param value : String
     * @param option : Number
     * Due to given string as @value  and the @option selected
     * returns a capitalized string
     * @author santiago_amezcua.at.hotmail.com
     *
     * Due to given @option will capitalize with a specific form
     *
     * Given no option MAKE UPPER JUST THE FIRST LETTER OF THE WHOLE STRING
    */

    if(value.length === 0) return '';

    //makes the first letter Upper,
    // TODO: MAKE A SWITCH STATEMENT, NOT IF'S
    if(option === 1){
      return value.charAt(0).toUpperCase()
      .concat(value.substring(1, value.length).toLowerCase());
      // then appends the rest of the string in lower
    } else if(option === 2) {
      return value.replace(/-/g, ' ');
    } else if(option === 3){
      value = value.replace(/-/g, ' ');
      return value.charAt(0).toUpperCase()
        .concat(value.substring(1, value.length).toLowerCase());
    } else {
      return ''
    }


  }
}
