import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the FeathersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeathersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FeathersProvider Provider');
  }

}
