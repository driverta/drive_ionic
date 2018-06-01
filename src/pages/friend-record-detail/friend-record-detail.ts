import { Component,ViewChild } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { FriendProfileBarComponent } from '../../components/friend-profile-bar/friend-profile-bar';
import firebase from 'firebase';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { Exercise } from '../../models/Exercise';

@IonicPage()
@Component({
  selector: 'page-friend-record-detail',
  templateUrl: 'friend-record-detail.html',
})
export class FriendRecordDetailPage {

  exercise: any;
  username: any;
  myUsername: string;
  bool = true;
  myLifts:any = {};
  checkRec = false;

  @ViewChild(FriendProfileBarComponent) barChart: FriendProfileBarComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
    public alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider,
    private exerciseService: ExerciseProvider
  	) {
  	this.exercise = navParams.get('item');
    this.username = navParams.get("username");
    this.myUsername = localStorage.getItem("username");
  }

  ionViewWillEnter() {
    this.barChart.makeChart();
  }
  //   this.records._records = [
      
  //   ];
  //   this.records._chart = [
      
  //   ];
    
  //   this.getRecords();

  //   this.getExercises().then((val) => {
  //     console.log(val)
  //     this.myLifts = val;
  //   });
  // }

  // getRecords() {
    
  //   var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    
  //   queryHistory.once("value").then( snapshot => {
  //     //alert("D")
  //     console.log(snapshot)
  //     snapshot.forEach( childSnapshot => {
  //       //alert("BRUH")
  //       var childData1 = childSnapshot.val();
  //       this.checkRec = false;
  //       this.records._records.forEach( (value, index) => {
  //         if (childData1.reps == value.reps) {
  //           this.checkRec = true;
  //           if (childData1.weight > value.weight) {
  //             this.records._records[index].weight = childData1.weight;
  //             this.records._records[index].oneRM = childData1.oneRM;
  //             this.records._records[index].records++;
  //           }
  //         }
  //       });
  //       if (this.checkRec == false){
  //         this.records._records.push({reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: 1})
  //       }
  //     });
  //   });
  //   this.barChart.makeChart();
  // }

  saveExercise(exercise) {
    console.log("DragonFuckerWasHere")
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

  getExercises(): Promise<any> {
    this.storage.ready().then(() => {
      console.log(this.storage.get(this.myUsername + '/exercises'))
      
    })
    return this.storage.get(this.myUsername + '/exercises');
  }

}
