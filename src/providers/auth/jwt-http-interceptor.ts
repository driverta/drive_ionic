import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {
  constructor(
    private storage: Storage
  ) {}
  
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      //navigate /delete cookies or whatever
    }
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