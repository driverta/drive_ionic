import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Exercise } from '../../models/Exercise';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { StatusBar } from '@ionic-native/status-bar';
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
  minutes = 0;
  seconds = 0;
  hours = 0;
  buttonPressed = false;
  interval: any;

  constructor(
    private statusBar: StatusBar,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private exerciseService: ExerciseProvider,
    private userService: ProvidersUserProvider) {
  }

  ionViewDidLoad() {
    this.statusBar.styleBlackOpaque();
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

  workout(){
    if (this.buttonPressed == true){
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      clearInterval(this.interval);
      this.buttonPressed = false;
    } else {
      this.buttonPressed = true;
      this.interval = setInterval(() =>{
        if (this.minutes == 59 && this.seconds == 59){
          this.hours++;
          this.minutes = 0;
          this.seconds = 0;
        } else if (this.seconds == 59){
          this.minutes++;
          this.seconds = 0;
        } else {
          this.seconds++
        }
      }, 1000)
    }
  }
}
