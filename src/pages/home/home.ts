import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Exercise } from '../../models/Exercise';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { ExerciseProvider } from '../../providers/exercise/exercise';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private exercises: Exercise[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private exerciseService: ExerciseProvider,
    private userService: ProvidersUserProvider) {
  }

  ionViewDidLoad() {
    this.userService.getExercises().subscribe(exercises => {
      this.exercises = exercises
    });
    console.log('ionViewDidLoad HomePage');
  }

  

  toChest(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Chest"),
      title: "Chest"
    });
  }

  toBack(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Back"),
      title: "Back"
    });
  }

  toLegs(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Legs"),
      title: "Legs"
    });
  }

  toArms(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Arms"),
      title: "Arms"
    });
  }

  toShoulders(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Shoulders"),
      title: "Shoulders"
    });
  }

  toAbs(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Abs"),
      title: "Abs"
    });
  }

  toCardio(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Cardio"),
      title: "Cardio"
    });
  }

  toFlexibility(){
    this.navCtrl.push('ListMasterPage', {
      exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Flexibility"),
      title: "Flexibility"
    });
  }
}
