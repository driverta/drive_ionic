import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators';
import {ReplaySubject, Observable} from "rxjs";
import {Storage} from "@ionic/storage";
// import {JwtHelperService} from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { local } from "d3";
import { AngularFirestore } from '@angular/fire/firestore';
import { Firebase } from "@ionic-native/firebase";
import firebase from 'firebase';
import { UserModel } from "../../models/users";
import { ProvidersUserProvider } from "../providers-user/providers-user";

@Injectable()
export class AuthProvider {
  private jwtTokenName = 'jwt_token';

  authUser = new ReplaySubject<any>(1);
  private auth: any;
  // private url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com";
  //private url = "http://localhost:8080/api";
  private url = "http://DriveApi.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";

  constructor(private readonly httpClient: HttpClient,
              private readonly storage: Storage,
              private af: AngularFirestore,
              public firebaseNative: Firebase,
              public userService: ProvidersUserProvider,
            ) {
  }

  checkLogin() {
    this.userService.checkAuthentication().subscribe(data =>{
      alert(data);
      console.log(data);
    })

    // this.userService.checkAuthentication().catch((err) => {
    //   console.log(err);
    //   this.refreshToken();
    //   this.userService.checkAuthentication().catch(err => {
    //     this.authUser.next(null);
    //   }).subscribe(data => {})
    // }).subscribe(data => {});

    this.storage.get('jwt_token').then((jwt_token) => {
      if (jwt_token) {
        this.authUser.next(jwt_token);
      } else {
        this.storage.remove('jwt_token').then(
          () => {}
        ).catch((error) => {
          console.log(error);
        });
        this.authUser.next(null);
      }
    })

  }


  getVersion(): Observable<any> {
    return this.httpClient.get(`${this.url}/getVersion`, {responseType: 'text'})
  }

  login(values: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, values, {responseType: 'text'})
      .pipe(tap((jwt: any) => this.handleJwtResponse(jwt)));
  }

  logout() {

    var promise = new Promise((resolve, reject) => {
      this.storage.remove(this.jwtTokenName).then(
        () => this.authUser.next(null)
      ).catch((error) => {
         reject(error);
      });
      this.userService.setUser(new UserModel());
      this.storage.remove("email").then(
        () => this.authUser.next(null)
      ).catch((error) => {
         reject(error)
      });
      this.storage.set("stay", "out").then(
        () => {}
      ).catch((error) => {
        reject(error);
      })
    });
    return promise;
  }

  signup(values: any, email): Observable<any> {
    let self = this;
    return this.httpClient.post(this.url + '/signup', values, {responseType: 'text'})
      .pipe(tap((jwt: any) => {
        if (jwt !== 'EXISTS') {
          self.saveLogin(email);

          return this.handleJwtResponse(jwt);
        }
        return jwt;
      }));
  }

  // Authenticates with firebase and returns back the users ID TOKEN used to authenticate with the API
  authWithFirebase(email, password) {
    let self = this;
    var promise = new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(value => {
        
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          self.saveLogin(email);
          resolve(idToken);
        }).catch(function(error) {
          reject(error);
        });
      }).catch( error => {
        reject(error);
      });
    })
    return promise;
  }

  refreshToken() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken(true).then(jwtToken => {
          this.storage.set("jwt_token", jwtToken).then(
            () => {},
          ).catch((error) => {
            console.log(error);
          });
          return jwtToken;
        })
      }
    })
  }


  saveRefreshToken(refreshToken) {
    this.storage.set("refreshToken", refreshToken).then(
      () => {},
      (error) => {}
    )
  }

  saveTokenTimeout(tokenTimeout) {
    this.storage.set("tokenTimeout", tokenTimeout).then(
      () => {},
      (error) => {}
    )
  }

  saveLogin(email) {
    this.storage.set("email", email).then(
      () => {},
      (error) => {}
    )
    this.storage.set("stay", "logged").then(
      () => {},
      (error) => {}
    )
  }
  

  private handleJwtResponse(jwt: string) {
    localStorage.setItem(this.jwtTokenName, jwt)
    this.authUser.next(jwt)
    return jwt;
  }
}