import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 94) {
     return 'fraco';
    } else if (value >= 94 && value <= 96) {
      return 'medio';
    } else if (value >= 97) {
      return 'bom';
    } else {
    }
  }

}
