import { Component } from '@angular/core';

/**
 * Generated class for the CardioBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardio-bar',
  templateUrl: 'cardio-bar.html'
})
export class CardioBarComponent {

  text: string;

  constructor() {
    console.log('Hello CardioBarComponent Component');
    this.text = 'Hello World';
  }

}
