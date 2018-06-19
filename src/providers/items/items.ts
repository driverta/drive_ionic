import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {

  constructor(public http: HttpClient) {
  }

}
