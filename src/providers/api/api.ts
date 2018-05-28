import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/getUsers';

  constructor(public http: Http) {
  }

  get() {
    return this.http.get(this.url);
  }

}
