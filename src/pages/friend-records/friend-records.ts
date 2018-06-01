import { Component } from '@angular/core';
import { IonicPage,
  AlertController,
  NavController,
  NavParams,
  ActionSheetController
} from 'ionic-angular';

import { KeysPipe } from '../../pipes/keys/keys';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { Exercise } from '../../models/Exercise';

@IonicPage()
@Component({
  selector: 'page-friend-records',
  templateUrl: 'friend-records.html',
})
export class FriendRecordsPage {

  username: string;
  user: any;
  myUsername: string;
	filteredExercises = [];
  private exercises: Exercise[];
  private myExercises: Exercise[];
  bool = true;

  filter= "All";

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
    private storage: Storage,
    public alertCtrl: AlertController,
    public actShtCtrl: ActionSheetController,
    private userService: ProvidersUserProvider,
    private exerciseService: ExerciseProvider) {
    this.user = navParams.get('user');
  	this.username = this.user.name;
    this.myUsername = this.userService.getUser().username;

  }

  ionViewDidLoad() {
    this.userService.getCompetingUsersExercises(this.user.id).subscribe(exercises => {
      this.exercises = exercises;
      this.filteredExercises = exercises;
    });
  	// var query1 = firebase.database().ref('/' + this.username + '/exercises');
    // query1.once("value").then( snapshot => {
      
    //   snapshot.forEach( childSnapshot => {
        
    //     var childData1 = childSnapshot.val();
    //     var key = childSnapshot.key;
        
    //     this.setlifts[key] = childData1;
    //     this.lifts = this.setlifts
      
    //   });
    // });

    // this.getExercises().then((val) => {
    //   console.log(val)
    //   this.myLifts = val;
    // });
  }

  openItem(item) {
    if (item.MuscleGroup.muscleGroupName == "Cardio"){
      this.navCtrl.push('FriendCardioRecordDetailPage', {
        item: item,
        user: this.user
      });
    }else {
      this.navCtrl.push('FriendRecordDetailPage', {
        item: item,
        user: this.user
      });
    }
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
            console.log('Cancel clicked');
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

  // getExercises(): Promise<any> {
  //   this.storage.ready().then(() => {
  //     console.log(this.storage.get(this.myUsername + '/exercises'))
      
  //   })
  //   return this.storage.get(this.myUsername + '/exercises');
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

  //   if(this.bool){
  //     if (Array.isArray(exercise.history)){
  //       exercise.history = [];
  //     } else {
  //       exercise.history = {};
  //     }

  //     var key = exercise.name + '-' + exercise.variation
      
  //     this.myLifts[key] = exercise
      
  //     this.storage.set(this.myUsername + '/exercises', this.myLifts).then(() =>{
  //       this.exerciseAdded();
  //     });

  //   }
  // }

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
