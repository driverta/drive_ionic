import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { History } from '../../models/History';
import { Flexibility } from '../../models/Flexibility';
import { BodyLift } from '../../models/BodyLift';


/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

	liftingHistory: LiftingHistory[]; 
	cardioHistory: CardioHistory[];

	History: History = new History();
	bodyLift: BodyLift[];
	flexHistory: Flexibility[];

	_history = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_charts = [{date: new Date(0), reps: 0, weight: 0, oneRM: 0}]

	_cardio = [{date: new Date(0), miles: 0, time: 0, mph: 0}]

	_cardioCharts = [{date: new Date(0), miles: 0, time: 0, mph: 0}]

  constructor(public http: HttpClient) {
  
	}
	// private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
	private url = "http://localhost:8080/api/";
	// private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";


	getLiftingHistoryByExercise(userId, exerciseId): Observable<LiftingHistory[]> {
    	return this.http.get<LiftingHistory[]>(this.url + "getLiftingHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}
	
	getCardioHistoryByExercise(userId, exerciseId): Observable<CardioHistory[]> {
    	return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}

	getHistoryByExercise(userId, exerciseId): Observable<CardioHistory[]> {
    	return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}

	getFlexByExercise(userId, exerciseId): Observable<Flexibility[]> {
		return this.http.get<Flexibility[]>(this.url + "getFlexHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}

	getBodyLiftByExercise(userId, exerciseId): Observable<BodyLift[]> {
		return this.http.get<BodyLift[]>(this.url + "getBodyLiftHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId)
	}
	
	getCardioHistory(userId): Observable<CardioHistory[]> {
    	return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryById?userId=" + userId)
	}
	
	getLiftingHistory(userId): Observable<LiftingHistory[]> {
    	return this.http.get<LiftingHistory[]>(this.url + "getUserLiftingHistory?userId=" + userId)
	}
	
	removeLiftingHistory(liftingHistory): Observable<any>{
    	return this.http.post(this.url + "deleteLiftingHistory?", liftingHistory, {responseType: 'text'});
	}
	
	removeCardioHistory(cardioHistory): Observable<any>{
    	return this.http.post(this.url + "deleteCardioHistory?", cardioHistory, {responseType: 'text'});
	}
	  
	addFlexHistory(history): Observable<any>{
		return this.http.post(this.url + "addFlexHistory", history, {responseType: 'text'});
	}
	addFlex(flex): Observable<any>{
		return this.http.post(this.url + "addFlex", flex, {responseType: 'text'});
	}

	addBodyLiftHistory(history): Observable<any>{
		return this.http.post(this.url + "addBodyLiftHistory", history, {responseType: 'text'});
	}
	
	removeBodyLift(bodyLift): Observable<any>{
		return this.http.post(this.url + "removeBodyLift", bodyLift, {responseType: 'text'});
	}

	removeflex(flex): Observable<any>{
		return this.http.post(this.url + "removeFlex", flex, {responseType: 'text'});
	}

	addBodyLift(bodyLift): Observable<any>{
		return this.http.post(this.url + "addBodyLift", bodyLift, {responseType: 'text'});
	}
}
