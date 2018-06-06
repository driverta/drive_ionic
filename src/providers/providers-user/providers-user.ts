import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/users';
import { Exercise } from '../../models/Exercise';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
/*
  Generated class for the ProvidersUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersUserProvider {

  private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  // private url = "http://localhost:8080/api/";

  user: UserModel = new UserModel(); 

  constructor(public http: Http) {
    console.log('Hello ProvidersUserProvider Provider');
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get(this.url + "getUsers").map((res: Response) => res.json());
  }

  getLeaderboardData(userId): Observable<UserModel[]> {
    return this.http.get(this.url + "getLeaderboardData?userId=" + userId).map((res: Response) => res.json());
  }

  getOneUser(username): Observable<UserModel> {
    return this.http.get(this.url + "getUserByUsername?username=" + username).map((res: Response) => res.json());
  }

  getProfilePic(username): Observable<Response> {
    return this.http.get(this.url + "getUserProfilePic?username=" + username);
  }

  uploadProfilePic(username, pic): Observable<Response> {
    return this.http.post(this.url + "uploadUserProfilePic?username=" + username, pic);
  }

  getUserByEmail(email): Observable<UserModel> {
    return this.http.get(this.url + "getUserByEmail?email=" + email).map((res: Response) => res.json());
  }

  getCompetingUsers(userId): Observable<UserModel[]> {
    return this.http.get(this.url + "getUserCompeting?userId=" + userId).map((res: Response) => res.json());
  }

  addCompetingUser(competing): Observable<String>{
    return this.http.post(this.url + "createCompeting", competing).map((res: Response) => res.text());
  }

  removeCompetingUser(competing): Observable<Response>{
    return this.http.post(this.url + "deleteCompeting?", competing);
  }
  
  getCompetitors(userId): Observable<UserModel[]> {
    return this.http.get(this.url + "getUserCompetitors?userId=" + userId).map((res: Response) => res.json());
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get(this.url + "getUserExercises?id=" + this.user.id).map((res: Response) => res.json());
  }

  getCompetingUsersExercises(userId): Observable<Exercise[]> {
    return this.http.get(this.url + "getUserExercises?id=" + userId).map((res: Response) => res.json());
  }

  addLiftingHistory(lf){
    lf.user_id=this.user.id;
    return this.http.post(this.url + "addLiftingHistory", lf);
  }

  getLiftingHistoryByIdAndExercise(ex: Exercise): Observable<LiftingHistory[]>{
    return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id ).map((res: Response) => res.json());
  }

  getCompetingUsersLiftingHistoryByIdAndExercise(ex: Exercise, userId): Observable<LiftingHistory[]>{
    return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id ).map((res: Response) => res.json());
  }

  
  getCardioHistoryByIdAndExercise(ex: Exercise): Observable<CardioHistory[]>{
    return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id ).map((res: Response) => res.json());
  }

  getCompetingUsersCardioHistoryByIdAndExercise(ex: Exercise, userId): Observable<CardioHistory[]>{
    return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id ).map((res: Response) => res.json());
  }

  addCardioHistory(cardio){
    cardio.user_id=this.user.id;
    console.log(this.user.id)
    return this.http.post(this.url + "addCardioHistory", cardio);
  }


  getExercise(mgId, name, variation): Observable<Exercise> {
    return this.http.get(this.url + "getExercise?muscleGroup=" + mgId + "&name=" + name.encodeURI() + "&variation=" + variation.encodeURI()).map((res: Response) => res.json());
  }

  getTotalGains(userId): Observable<number> {
    return this.http.get(this.url + "getUserGainsTotal?userId=" + userId).map((res: Response) => res.json());
  }

  createUser(user): Observable<UserModel>{
    return this.http.post(this.url + "createUser", user).map((res: Response) => res.json());
  }

  removeExercise(exId): Observable<Response>{
    return this.http.get(this.url + "removeExercise?userID=" + this.user.id + "&exID=" + exId);
  }

  setUser(newUser){
    this.user = newUser;
  }

  getUser(){
    return this.user;
  }
}
