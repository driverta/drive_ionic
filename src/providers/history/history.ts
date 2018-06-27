import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(public http: HttpClient) {
  
	}
	// private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
	private url = "http://localhost:8080/api/";

	getLiftingHistoryByExercise(userId, exerciseId): Observable<LiftingHistory[]> {
    return this.http.get<LiftingHistory[]>(this.url + "getLiftingHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}
	
	getCardioHistoryByExercise(userId, exerciseId): Observable<CardioHistory[]> {
    return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}
	
	getCardioHistory(userId): Observable<CardioHistory[]> {
    return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryById?userId=" + userId)
	}
	
	getLiftingHistory(userId): Observable<LiftingHistory[]> {
    return this.http.get<LiftingHistory[]>(this.url + "getUserLiftingHistory?userId=" + userId)
	}
	
	removeLiftingHistory(liftingHistory): Observable<Response>{
    return this.http.post<Response>(this.url + "deleteLiftingHistory?", liftingHistory);
	}
	
	removeCardioHistory(cardioHistory): Observable<Response>{
    return this.http.post<Response>(this.url + "deleteCardioHistory?", cardioHistory);
  	}
}
