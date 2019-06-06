import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  AlertController,
  NavParams,
  ActionSheetController
} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { Exercise } from '../../models/Exercise';

@IonicPage()
@Component({
  selector: 'page-records',
  templateUrl: 'records.html',
})
export class RecordsPage {

	username: string;
	//lifts:any = {};
  //setlifts:any = {};
  bool = true;
  friendExercises = false;
  filter= "All";
  user: any;
  filteredExercises = [];
  private exercises: Exercise[];

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
    private storage: Storage,
    public alertCtrl: AlertController,
    private exerciseService: ExerciseProvider,
    public actShtCtrl: ActionSheetController,
    private userService: ProvidersUserProvider) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    if (this.user == this.userService.getUser()){
      this.userService.getExercises().subscribe(exercises => {
        this.exercises = exercises;
        this.filteredExercises = exercises;
        this.friendExercises = false;
      });
    } else {
      this.userService.getCompetingUsersExercises(this.user.id).subscribe(exercises => {
        this.exercises = exercises;
        this.filteredExercises = exercises;
        this.friendExercises = true;
      });
    }
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  openItem(exercise) {
    this.navCtrl.push('ExerciseDetailPage', {
      exercise: exercise,
      muscleGroup: exercise.MuscleGroup.muscleGroupName,
      user: this.user
    });
  }

  filterExercises(){
    let actionSheet = this.actShtCtrl.create({
      title: 'Filter Exercises By Muscle Group',
      buttons: [
        {
          text: 'All',
          handler: () => {
            this.filteredExercises = this.exercises
          }
        },{
          text: 'Chest',
          handler: () => {
            this.filter = "Chest";
            this.executeFilter()
          }
        },{
          text: 'Back',
          handler: () => {
            this.filter = "Back";
            this.executeFilter()          
          }
        },{
          text: 'Legs',
          handler: () => {
            this.filter = "Legs";
            this.executeFilter()          
          }
        },{
          text: 'Core',
          handler: () => {
            this.filter = "Core";
            this.executeFilter()          
          }
        },{
          text: 'Shoulders',
          handler: () => {
           this.filter = "Shoulders";
            this.executeFilter()
          }
        },{
          text: 'Arms',
          handler: () => {
            this.filter = "Arms";
            this.executeFilter()          
          }
        },{
          text: 'Cardio',
          handler: () => {
            this.filter = "Cardio";
            this.executeFilter()          
          }
        },{
          text: 'Other',
          handler: () => {
            this.filter = "Other";
            this.executeFilter()          
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  executeFilter(){
    this.filteredExercises = [];
    this.exercises.forEach((exercise) => {
      if (exercise.MuscleGroup.muscleGroupName == this.filter){
          this.filteredExercises.push(exercise);
      }
    })
  }

  saveExercise(exercise) {
    this.bool = true;
    
    this.userService.getExercises().subscribe(exercises => {
      for (let myExercise of exercises) {
        if (myExercise.exerciseName == exercise.exerciseName
          && myExercise.variation == exercise.variation
          && myExercise.MuscleGroup.id == exercise.MuscleGroup.id) {
          this.presentAlert();
          this.bool = false;
        }
      }

      if (this.bool) {
        var newExercise = new Exercise;
        newExercise.exerciseName = exercise.exerciseName;
        newExercise.variation = exercise.variation;
        newExercise.MuscleGroup = exercise.MuscleGroup;
        this.exerciseService.createExercise(this.userService.getUser().id, newExercise).subscribe(data => {
          this.exerciseAdded()
        })
      }
    })
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Duplicate Exercise',
      subTitle: 'You already have an exercise with this name and Variation',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  exerciseAdded() {
    let alert = this.alertCtrl.create({
      title: 'Exercise added to your list!',
      buttons: ['Ok']
    });
    alert.present();
  }

}
