import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/users';
/*
  Generated class for the ProvidersUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersUserProvider {

  //	private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
  private url = "http://localhost:8080/api/";

  constructor(public http: Http) {
    console.log('Hello ProvidersUserProvider Provider');
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get(this.url + "getUsers").map((res: Response) => res.json());
  }

  getOneUser(username): Observable<UserModel> {
    return this.http.get(this.url + "getUserByUsername?username=" + username).map((res: Response) => res.json());
  }

  createUser(user): Observable<Response>{
    return this.http.post(this.url + "createUser", user);
  }
}
