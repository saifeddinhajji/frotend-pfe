import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value){
      return "assets/images/defaultimage.png"
    }
    return value;
  }

}
