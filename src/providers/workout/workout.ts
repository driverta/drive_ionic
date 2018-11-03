import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkoutModel } from '../../models/Workout';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkoutService {
  // private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  private url = "http://localhost:8080/api/";
  //  private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";

  constructor(public http: HttpClient) {
  }

  getCompetingWorkouts(userId, startIndex, endIndex): Observable<WorkoutModel[]> {
    return this.http.get<WorkoutModel[]>(this.url + "getCompetingWorkouts?userId=" + userId + '&startIndex=' + startIndex + '&endIndex=' + endIndex);
  }

  getTimelineData(userId, startIndex, endIndex): Observable<any[]> {
    return this.http.get<any[]>(this.url + "getTimelineData?userId=" + userId + '&startIndex=' + startIndex + '&endIndex=' + endIndex);
  }

  createWorkout(workout): Observable<WorkoutModel> {
    return this.http.post<WorkoutModel>(this.url + "createWorkout", workout);
  }

  setWorkoutEndTime(workout): Observable<WorkoutModel> {
    return this.http.post<WorkoutModel>(this.url + "setWorkoutEndTime?", workout );
  }
}
