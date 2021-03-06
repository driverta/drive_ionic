import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortByRepsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortByReps',
  pure: false
})
export class SortByRepsPipe implements PipeTransform {
  transform(array: any, args: any): any {
  	//alert("What");
    array.sort((a: any, b: any) => {
    	
      if (a.reps < b.reps) {
        return -1;
      } else if (a.reps > b.reps) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
