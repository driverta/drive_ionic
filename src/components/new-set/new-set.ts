import { Component } from '@angular/core';

/**
 * Generated class for the NewSetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-set',
  templateUrl: 'new-set.html'
})
export class NewSetComponent {

  xlevel = 1;
	xcurrent = 25;
	xtotal = 100;
	progress = 75;

  constructor() {
 
  }

}

