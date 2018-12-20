import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  // private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";

  // private url = "http://localhost:8080/api/";
  private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";


  user: UserModel = new UserModel(); 

  constructor(public http: HttpClient) {
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url + "getAllUsers")
  }

  getFilteredUsersSearch(searchTerm): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url + "getFilteredUsersSearch?searchTerm=" + searchTerm)
  }

  getLeaderboardData(userId): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url + "getLeaderboardData?userId=" + userId)
  }

  getOneUser(username): Observable<UserModel> {
    return this.http.get<UserModel>(this.url + "getUserByUsername?username=" + username)
  }

  getProfilePic(username): Observable<any> {
    return this.http.get(this.url + "getUserProfilePic?username=" + username, {responseType: 'text'});
  }

  uploadProfilePic(username, pic): Observable<any> {
    return this.http.post(this.url + "uploadUserProfilePic?username=" + username, pic, {responseType: 'text'});
  }

  getUserByEmail(email): Observable<UserModel> {
    return this.http.get<UserModel>(this.url + "getUserByEmail?email=" + email)
  }

  getCompetingUsers(userId): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url + "getUserCompeting?userId=" + userId)
  }

  addCompetingUser(competing): Observable<String>{
    return this.http.post(this.url + "createCompeting", competing, {responseType: 'text'})
  }

  removeCompetingUser(competing): Observable<any>{
    return this.http.post(this.url + "deleteCompeting?", competing, {responseType: 'text'});
  }
  
  getCompetitors(userId): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url + "getUserCompetitors?userId=" + userId)
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + "getUserExercises?id=" + this.user.id)
  }

  getCompetingUsersExercises(userId): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + "getUserExercises?id=" + userId)
  }

  addLiftingHistory(lf){
    lf.user_id=this.user.id;
    return this.http.post(this.url + "addLiftingHistory", lf);
  }

  getLiftingHistoryByIdAndExercise(ex: Exercise): Observable<LiftingHistory[]>{
    return this.http.get<LiftingHistory[]>(this.url + "getLiftingHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id )
  }

  getCompetingUsersLiftingHistoryByIdAndExercise(ex: Exercise, userId): Observable<LiftingHistory[]>{
    return this.http.get<LiftingHistory[]>(this.url + "getLiftingHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id )
  }

  
  getCardioHistoryByIdAndExercise(ex: Exercise): Observable<CardioHistory[]>{
    return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id )
  }

  getCompetingUsersCardioHistoryByIdAndExercise(ex: Exercise, userId): Observable<CardioHistory[]>{
    return this.http.get<CardioHistory[]>(this.url + "getCardioHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id )
  }

  addCardioHistory(cardio){
    cardio.user_id=this.user.id;
    return this.http.post(this.url + "addCardioHistory", cardio);
  }

  addFlexHistory(history, flex){

		return this.http.post(this.url + "addFlexHistory", history);
  }

  getExercise(mgId, name, variation): Observable<Exercise> {
    return this.http.get<Exercise>(this.url + "getExercise?muscleGroup=" + mgId + "&name=" + name.encodeURI() + "&variation=" + variation.encodeURI())
  }

  getTotalGains(userId): Observable<number> {
    return this.http.get<number>(this.url + "getUserGainsTotal?userId=" + userId)
  }

  createUser(user): Observable<UserModel>{
    return this.http.post<UserModel>(this.url + "createUser", user)
  }

  removeExercise(exId): Observable<any>{
    return this.http.get(this.url + "removeExercise?userID=" + this.user.id + "&exID=" + exId, {responseType: 'text'});
  }

  setUser(newUser){
    this.user = newUser;
  }

  getUser(){
    return this.user;
  }
}
