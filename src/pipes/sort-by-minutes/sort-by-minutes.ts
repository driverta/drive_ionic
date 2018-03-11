import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortByMinutesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortByMinutes',
  pure: false
})
export class SortByMinutesPipe implements PipeTransform {
  transform(array: any, args: any): any {
  	//alert("What");
    array.sort((a: any, b: any) => {
    	
      if (a.max < b.max) {
        return -1;
      } else if (a.max > b.max) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
