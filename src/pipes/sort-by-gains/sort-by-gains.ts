import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortByGainsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortByGains',
  pure: false
})
export class SortByGainsPipe implements PipeTransform {
  transform(array: any, args: any): any {
  	//alert("What");
    array.sort((a: any, b: any) => {
    	
      if (a.gains < b.gains) {
        return -1;
      } else if (a.gains > b.gains) {
        return 1;
      } else {
        return 0;
      }
    });
    return array.reverse();
  }
}