import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CardioTimeConvertPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cardioTimeConvert',
})
export class CardioTimeConvertPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number): string {
    let  temp = value * 60;
    const hours = Math.floor((temp/3600));
    const minutes: number = Math.floor((temp/ 60)/60);
    const seconds=Math.floor(temp % 3600 % 60);
    return hours + ':' + minutes + ':' + seconds;
  }
}
