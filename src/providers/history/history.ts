import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

	liftingHistory: LiftingHistory = new LiftingHistory(); 

	cardioHistory: CardioHistory = new CardioHistory();

	_history = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_charts = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_cardio = [{date: new Date(0), miles: 0, time: 0, mph: 0}]

	_cardioCharts = [{date: new Date(0), miles: 0, time: 0, mph: 0}]

  constructor(public http: Http) {
  
	}
	private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
	// private url = "http://localhost:8080/api/";

	getLiftingHistoryByExercise(userId, exerciseId): Observable<LiftingHistory[]> {
    return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId).map((res: Response) => res.json());
	}
	
	getCardioHistoryByExercise(userId, exerciseId): Observable<CardioHistory[]> {
    return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId).map((res: Response) => res.json());
	}
	
	getCardioHistory(userId): Observable<CardioHistory[]> {
    return this.http.get(this.url + "getCardioHistoryById?userId=" + userId).map((res: Response) => res.json());
	}
	
	getLiftingHistory(userId): Observable<LiftingHistory[]> {
    return this.http.get(this.url + "getUserLiftingHistory?userId=" + userId).map((res: Response) => res.json());
	}
	
	removeLiftingHistory(liftingHistory): Observable<Response>{
    return this.http.post(this.url + "deleteLiftingHistory?", liftingHistory);
	}
	
	removeCardioHistory(cardioHistory): Observable<Response>{
    return this.http.post(this.url + "deleteCardioHistory?", cardioHistory);
  }
}
