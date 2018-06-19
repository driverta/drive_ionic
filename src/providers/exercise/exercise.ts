import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  // private url = "http://Driveapi-pic.uvrytrqbjh.us-east-1.elasticbeanstalk.com/";
  private url = "http://localhost:8080/api/";


  constructor(private http: HttpClient) {
    console.log('Hello ExerciseProvider Provider');
  }

  getExercisesByUserId(userId): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + "getExerciseByUserID?userID=" + userId);
  }

  createExercise(userid, ex): Observable<Exercise>{
    return this.http.post<Exercise>(this.url + "createExercise?userID=" + userid, ex);
  }

  getAllMuscleGroups(): Observable<MuscleGroup[]>{
    return this.http.get<MuscleGroup[]>(this.url + "getAllMG");
  }
}
