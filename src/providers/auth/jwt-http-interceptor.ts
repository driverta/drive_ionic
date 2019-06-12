import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject, forwardRef, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { AlertController, Alert} from 'ionic-angular';
import { AuthProvider } from '../providers';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {

  constructor(
    private storage: Storage,
    public alertCtrl: AlertController,
    public inj: Injector
  ) {
    
  }
  
  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    let auth = this.inj.get(AuthProvider);
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {

    }
    let alert = this.alertCtrl.create({
      title: "ERROR",
      message: JSON.stringify(err.message),
      buttons: ['Ok']
    });
    alert.present();
    return Observable.throw(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let clone: HttpRequest<any>;

      return fromPromise(this.storage.get('jwt_token'))
              .pipe(switchMap(token => {
                  
                  if (token) {
                        clone = request.clone({
                          setHeaders: {
                            Accept: `application/json`,
                            'Content-Type': `application/json`,
                            Authorization: `${token}`,
                            Access: '*'
                          }
                        });
                      } else {
                        clone = request.clone({
                          setHeaders: {
                            Accept: `application/json`,
                            'Content-Type': `application/json`
                          }
                        });
                      }
                      // return next.handle(clone).catch(x=> this.handleAuthError(x)) 
                      return next.handle(clone).catch(error => {

                        if (error.status === 401) {
                          let auth = this.inj.get(AuthProvider);
                          auth.refreshToken();
                          clone = this.addAuthHeader(request, this.storage.get('jwt_token'))
                          return next.handle(clone);
                        }
            
                        return Observable.throw(error);
                    });
              }));
  }

  addAuthHeader(request, token) {
    return request.clone({
      setHeaders: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
        Authorization: `${token}`,
        Access: '*'
      }
    });
  }
}