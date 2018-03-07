import { Component } from '@angular/core';

/**
 * Generated class for the CardioLineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardio-line',
  templateUrl: 'cardio-line.html'
})
export class CardioLineComponent {

  text: string;

  constructor() {
    console.log('Hello CardioLineComponent Component');
    this.text = 'Hello World';
  }

}
