import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

	_history = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_charts = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

  constructor(public http: Http) {
  
  }

}
