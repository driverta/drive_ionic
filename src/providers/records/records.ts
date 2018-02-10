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
	    { reps: 0, weight: 0, oneRM: 0, records: 0 },
	  ];

	  _chart = [
	    { reps: 0, weight: 0, oneRM: 0, records: 0 },
	  ];

  constructor(public http: Http) {
   
  }

}
