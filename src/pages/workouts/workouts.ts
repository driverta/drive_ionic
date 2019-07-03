import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersUserProvider } from '../../providers/providers';
import { UserModel } from '../../models/users';
import { WorkoutProvider } from '../../providers/workout/workout';
import { Workout } from '../../models/Workout';

/**
 * Generated class for the WorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {

  user: UserModel;
  workouts: Workout[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userProvider: ProvidersUserProvider,
    private workoutProvider: WorkoutProvider
  ) {
  }

  ionViewDidLoad() {
    this.setUser();
    this.setWorkouts();
  }

  addWorkout() {
    
  }

  // PRIVATE

  private setUser() {
    this.user = this.userProvider.getUser();
  }

  private setWorkouts() {
    this.workoutProvider.getUserWorkouts(this.user.id).subscribe((workouts: Workout[]) => {
      if (workouts == null) {
        alert("ERROR GETTING WORKOUTS. PLEASE TRY AGAIN LATER.");
        return;
      }
      this.workouts = workouts;
    })
  }
}
