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
    // console.log(value)
    // let  temp = value * 60;
    // const hours = Math.floor((temp/3600));
    // const minutes: number = Math.floor((temp/ 60)/60);
    // console.log(minutes)
    // const seconds=Math.floor(temp % 3600 % 60);
    var hours = Math.floor(value/60)
    var minutesLeftOver = value - (hours * 60)
    var minutes = Math.floor(minutesLeftOver);
    var secondsLeftOver = (minutesLeftOver - minutes) * 60
    var seconds = Math.floor(secondsLeftOver)
    return hours + ':' + minutes + ':' + seconds;
  }
}
