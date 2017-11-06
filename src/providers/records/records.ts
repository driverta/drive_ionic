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

	_records = [1,2,3,4,5,6,8,10,12,15];

  constructor(public http: Http) {
   
  }

}
