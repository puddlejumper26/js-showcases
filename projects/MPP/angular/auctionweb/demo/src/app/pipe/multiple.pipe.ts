import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, arg:string) {
    let exp=parseFloat(arg);
    return Math.pow(value,isNaN(exp)?1:exp);
  }

}
