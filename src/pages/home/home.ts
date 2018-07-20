import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Exercise } from '../../models/Exercise';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { MuscleGroup } from '../../models/MuscleGroupModel';

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
  private mg: MuscleGroup[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private exerciseService: ExerciseProvider,
    private userService: ProvidersUserProvider) {
  }

  ionViewDidLoad() {
    this.userService.getExercises().subscribe(exercises => {
      console.log(exercises)
      this.exercises = exercises
    });
    console.log('ionViewDidLoad HomePage');

    this.exerciseService.getAllMuscleGroups().subscribe(data => {
      this.mg = data;
      console.log(this.mg)
    })
  }

  

  toChest(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Chest"),
      title: this.mg[0]
    });
  }

  toBack(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Back"),
      title: this.mg[1]
    });
  }

  toLegs(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Legs"),
      title: this.mg[2]
    });
  }

  toArms(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Arms"),
      title: this.mg[5]
    });
  }

  toShoulders(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Shoulders"),
      title: this.mg[4]
    });
  }

  toAbs(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Abs"),
      title: this.mg[3]
    });
  }

  toCardio(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Cardio"),
      title: this.mg[6]
    });
  }

  toFlexibility(){
    this.navCtrl.push('ListMasterPage', {
      //exercises : this.exercises.filter(exercise => exercise.MuscleGroup.muscleGroupName === "Flexibility"),
      title: this.mg[8]
    });
  }
}
