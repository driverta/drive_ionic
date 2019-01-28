import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { AlertController, Alert} from 'ionic-angular';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {
  constructor(
    private storage: Storage,
    public alertCtrl: AlertController,
  ) {}
  
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      //navigate /delete cookies or whatever
    }
    let alert = this.alertCtrl.create({
      title: "Terms of Use",
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
                      return next.handle(clone).catch(x=> this.handleAuthError(x)) 
              }));
  }
}