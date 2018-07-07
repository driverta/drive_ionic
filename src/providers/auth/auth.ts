import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators';
import {ReplaySubject, Observable} from "rxjs";
import {Storage} from "@ionic/storage";
// import {JwtHelperService} from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { local } from "d3";

@Injectable()
export class AuthProvider {
  private jwtTokenName = 'jwt_token';

  authUser = new ReplaySubject<any>(1);

  // private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com";
  // private url = "http://localhost:8080/api";
  private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com";

  constructor(private readonly httpClient: HttpClient,
              private readonly storage: Storage,
              // private readonly jwtHelper: JwtHelperService
            ) {
  }

  checkLogin() {
    const jwt = localStorage.getItem(this.jwtTokenName)
    if (jwt) {
      this.httpClient.get(`${this.url}/authenticate`)
        .subscribe(() => this.authUser.next(jwt),
          (err) => {
            localStorage.removeItem(this.jwtTokenName);
            this.authUser.next(null);
          })
      // OR
      // this.authUser.next(jwt);
    } else {
      localStorage.removeItem(this.jwtTokenName)
      this.authUser.next(null);
    }
  }

  getVersion(): Observable<any> {
    return this.httpClient.get(`${this.url}/getVersion`, {responseType: 'text'})
  }

  login(values: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, values, {responseType: 'text'})
      .pipe(tap((jwt: any) => this.handleJwtResponse(jwt)));
  }

  logout() {
    console.log(this.jwtTokenName);
    this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  }

  signup(values: any, email): Observable<any> {
    return this.httpClient.post(this.url + '/signup', values, {responseType: 'text'})
      .pipe(tap((jwt: any) => {
        if (jwt !== 'EXISTS') {
          this.saveLogin(email);
          console.log("DOESNT EXISTS");
          return this.handleJwtResponse(jwt);
        }
        return jwt;
      }));
  }

  private handleJwtResponse(jwt: string) {
    localStorage.setItem(this.jwtTokenName, jwt)
    this.authUser.next(jwt)
    return jwt;
  }
  saveLogin(email) {
    localStorage.setItem("stay","logged");
    localStorage.setItem("email",email);
  }
}