import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CardioHistoryModel } from '../../models/CardioHistory';
import { LiftingHistoryModel } from '../../models/LiftingHistory';


/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {
	
	cardioHistory: CardioHistoryModel = new CardioHistoryModel(); 
	
	liftingHistory: LiftingHistoryModel = new LiftingHistoryModel(); 


	_history = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_charts = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_cardio = [{date: new Date(0), miles: 0, time: 0, mph: 0}]

	_cardioCharts = [{date: new Date(0), miles: 0, time: 0, mph: 0}]

  constructor(public http: Http) {
  
  }
	//	private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
	private url = "http://localhost:8080/api/";
	
	getCardioExerciseHistory(userId, exerciseId): Observable<CardioHistoryModel[]> {
    return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + "&exerciseId=" + exerciseId).map((res: Response) => res.json());
  }
	
	getLiftingExerciseHistory(userId, exerciseId): Observable<LiftingHistoryModel[]> {
    return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + "&exerciseId=" + exerciseId).map((res: Response) => res.json());
  }
}
