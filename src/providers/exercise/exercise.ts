import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Exercise } from '../../models/Exercise';

/*
  Generated class for the ExerciseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExerciseProvider {

  //	private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  private url = "http://localhost:8080/api/";


  constructor(public http: Http) {
    console.log('Hello ExerciseProvider Provider');
  }

  getExercisesByUserId(userId): Observable<Exercise[]> {
    return this.http.get(this.url + "getExerciseByUserID?userID=" + userId).map((res: Response) => res.json());
  }

}
