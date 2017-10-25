import { Component } from '@angular/core';

/**
 * Generated class for the HistoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  history = [
    { date: '9-20-17', weight: 135, reps: 10, oneRM: 225},
    { date: '9-21-17', weight: 185, reps: 5, oneRM: 225}
  ]

  constructor() {
    
  }

}
