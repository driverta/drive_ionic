import { Component, ViewChild, ElementRef, Input, Renderer } from '@angular/core';
import { Exercise } from '../../models/Exercise';

/**
 * Generated class for the WorkoutCreateExerciseDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'workout-create-exercise-details',
  templateUrl: 'workout-create-exercise-details.html'
})
export class WorkoutCreateExerciseDetailsComponent {

    @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
    @Input('expanded') expanded;
    @Input('expandHeight') expandHeight;
    @Input('superSet') superSet;

    constructor(public renderer: Renderer) {

    }

    ngAfterViewInit(){
        this.expandWrapper.nativeElement.style.height = "100px"
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');    
    }

    addSuperSet() {
      alert("here");
    }

}
