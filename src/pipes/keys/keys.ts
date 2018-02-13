import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {
  transform(value: any, args?: any[]): any[] {
        // create instance vars to store keys and final output
	    let keyArr: any[] = Object.keys(value),
	        dataArr = [];

	    // loop through the object,
	    // pushing values to the return array
	    keyArr.forEach((key: any) => {
	        dataArr.push(value[key]);
	    });

	    // return the resulting array
	    return dataArr;
	}
}
