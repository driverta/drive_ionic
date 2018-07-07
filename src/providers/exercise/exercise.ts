import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Exercise } from '../../models/Exercise';
import { MuscleGroup } from '../../models/MuscleGroupModel';

/*
  Generated class for the ExerciseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExerciseProvider {

  // private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  // private url = "http://localhost:8080/api/";
  private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";


  constructor(public http: HttpClient) {
    console.log('Hello ExerciseProvider Provider');
  }

  getExercisesByUserId(userId): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + "getExerciseByUserID?userID=" + userId)
  }

  getAllExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + "getAllExercises")
  }

  getUniqueExercises(userId): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + "getUniqueExercises?userID=" + userId)
  }

  createExercise(userid, ex): Observable<any>{
    return this.http.post(this.url + "createExercise?userID=" + userid, ex, {responseType: 'text'});
  }

  getAllMuscleGroups(): Observable<MuscleGroup[]>{
    return this.http.get<MuscleGroup[]>(this.url + "getAllMG")
  }
}
