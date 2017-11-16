import { Component } from '@angular/core';
import  { StatsLineChart } from '../../models/item';

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
    {date: "9-20", reps: 1, weight:315, oneRM: 315},
    {date: "9-21", reps: 10, weight:215, oneRM: 300},
    {date: "9-26", reps: 5, weight:235, oneRM: 275},
    {date: "9-27", reps: 3, weight:205, oneRM: 225},
    {date: "9-28", reps: 2, weight:320, oneRM: 330},
    {date: "10-2", reps: 5, weight:185, oneRM: 225},
    {date: "10-3", reps: 16, weight:275, oneRM: 315},
    {date: "10-9", reps: 1, weight:300, oneRM: 300},
    {date: "10-10", reps: 1, weight:275, oneRM: 275},
    {date: "10-15", reps: 4, weight:285, oneRM: 305},
    {date: "10-16", reps: 1, weight:385, oneRM: 285}
];

  constructor() {
    
  }

}
