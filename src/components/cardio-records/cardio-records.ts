import { Component } from '@angular/core';

/**
 * Generated class for the CardioRecordsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardio-records',
  templateUrl: 'cardio-records.html'
})
export class CardioRecordsComponent {

  text: string;

  constructor() {
    console.log('Hello CardioRecordsComponent Component');
    this.text = 'Hello World';
  }

}
