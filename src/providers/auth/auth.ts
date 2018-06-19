import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators';
import {ReplaySubject, Observable} from "rxjs";
import {Storage} from "@ionic/storage";
import {JwtHelperService} from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthProvider {
  private jwtTokenName = 'jwt_token';

  authUser = new ReplaySubject<any>(1);

  // private url = "http://Driveapi-pic.uvrytrqbjh.us-east-1.elasticbeanstalk.com/";
  private url = "http://localhost:8080/api";

  constructor(private readonly httpClient: Http,
              private readonly storage: Storage,
              private readonly jwtHelper: JwtHelperService) {
  }

  checkLogin() {
    this.storage.get(this.jwtTokenName).then(jwt => {
      if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
        this.httpClient.get(`${this.url}/authenticate`)
          .subscribe(() => this.authUser.next(jwt),
            (err) => this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null)));
        // OR
        // this.authUser.next(jwt);
      }
      else {
        this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
      }
    });
  }

  login(values: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, values)
      .pipe(tap((jwt: any) => this.handleJwtResponse(jwt)));
  }

  logout() {
    this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  }

  signup(values: any): Observable<any> {
    alert(`${this.url}/signup`)
    return this.httpClient.post(this.url + '/signup', values)
      .pipe(tap((jwt: any) => {
        if (jwt !== 'EXISTS') {
          return this.handleJwtResponse(jwt);
        }
        return jwt;
      }));
  }

  private handleJwtResponse(jwt: string) {
    return this.storage.set(this.jwtTokenName, jwt)
      .then(() => this.authUser.next(jwt))
      .then(() => jwt);
  }
}
