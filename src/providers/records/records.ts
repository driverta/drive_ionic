import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Records {

		_records = [
	    { reps: 1, weight: 0, oneRM: 0, records: 0 },
	    { reps: 2, weight: 0, oneRM: 0, records: 0 },
	    { reps: 3, weight: 0, oneRM: 0, records: 0 },
	    { reps: 4, weight: 0, oneRM: 0, records: 0 },
	    { reps: 5, weight: 100, oneRM: 200, records: 1 },
	    { reps: 6, weight: 0, oneRM: 0, records: 0 },
	    { reps: 8, weight: 0, oneRM: 0, records: 0 },
	    { reps: 10, weight: 0, oneRM: 0, records: 0 },
	    { reps: 12, weight: 0, oneRM: 0, records: 0 },
	    { reps: 15, weight: 0, oneRM: 0, records: 0 }
	  ];

  constructor(public http: Http) {
   
  }

}
