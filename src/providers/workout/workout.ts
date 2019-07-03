import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from '../../models/Workout';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkoutProvider {
  // private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  private localUrl = "http://localhost:8080/api/";
  // private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";

  constructor(public http: HttpClient) {
  }

  getUserWorkouts(userId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.localUrl + `workouts?userId=${userId}`);
  }

  createWorkout(workout): Observable<Workout> {
    return this.http.post<Workout>(this.localUrl + "createWorkout", workout);
  }
}
