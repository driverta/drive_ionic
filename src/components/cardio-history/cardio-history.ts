import { Component } from '@angular/core';

/**
 * Generated class for the CardioHistoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardio-history',
  templateUrl: 'cardio-history.html'
})
export class CardioHistoryComponent {

  text: string;

  constructor() {
    console.log('Hello CardioHistoryComponent Component');
    this.text = 'Hello World';
  }

}
