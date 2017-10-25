import { Component } from '@angular/core';

/**
 * Generated class for the RecordsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'records',
  templateUrl: 'records.html'
})
export class RecordsComponent {

  records = [
    { reps: 1, weight: 0, oneRM: 0, records: 0 },
    { reps: 2, weight: 0, oneRM: 0, records: 0 },
    { reps: 3, weight: 0, oneRM: 0, records: 0 },
    { reps: 4, weight: 0, oneRM: 0, records: 0 },
    { reps: 5, weight: 185, oneRM: 225, records: 1 },
    { reps: 6, weight: 0, oneRM: 0, records: 0 },
    { reps: 8, weight: 0, oneRM: 0, records: 0 },
    { reps: 10, weight: 135, oneRM: 225, records: 1 },
    { reps: 12, weight: 0, oneRM: 0, records: 0 },
    { reps: 15, weight: 0, oneRM: 0, records: 0 }
  ];

  constructor() {
    
  }

}
