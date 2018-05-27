import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/users';
import { Exercise } from '../../models/Exercise';
/*
  Generated class for the ProvidersUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersUserProvider {

  //	private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  private url = "http://localhost:8080/api/";

  user: UserModel = new UserModel(); 

  constructor(public http: Http) {
    console.log('Hello ProvidersUserProvider Provider');
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get(this.url + "getUsers").map((res: Response) => res.json());
  }

  getOneUser(username): Observable<UserModel> {
    return this.http.get(this.url + "getUserByUsername?username=" + username).map((res: Response) => res.json());
  }

  getUserByEmail(email): Observable<UserModel> {
    return this.http.get(this.url + "getUserByEmail?email=" + email).map((res: Response) => res.json());
  }

  getCompetingUsers(username): Observable<UserModel[]> {
    return this.http.get(this.url + "getUserCompeting?username=" + username).map((res: Response) => res.json());
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get(this.url + "getUserExercises?id=" + this.user.id).map((res: Response) => res.json());
  }

  addLiftingHistory(lf){
    lf.user_id=this.user.id;
    return this.http.post(this.url + "addLiftingHistory", lf);
  }

  getExercise(mgId, name, variation): Observable<Exercise> {
    return this.http.get(this.url + "getExercise?muscleGroup=" + mgId + "&name=" + name.encodeURI() + "&variation=" + variation.encodeURI()).map((res: Response) => res.json());
  }

  createUser(user): Observable<Response>{
    return this.http.post(this.url + "createUser", user);
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
