import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { KeysPipe } from '../../pipes/keys/keys';
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

  filter= "All";

  filteredExercises = [];

  private exercises: Exercise[];

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private storage: Storage,
    public actShtCtrl: ActionSheetController,
    private userService: ProvidersUserProvider) {
  	//this.username = localStorage.getItem("username");

  }

  ionViewDidLoad() {
  	this.userService.getExercises().subscribe(exercises => {
      this.exercises = exercises;
      this.filteredExercises = exercises;
    });
    // this.getExercises().then((val) => {
    //   this.setlifts = val;
    //   this.lifts = this.setlifts
    // })
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  openItem(item) {
    if (item.muscle == "Cardio"){
      
      this.navCtrl.push('RecordCardioDetailPage', {
        item: item
      });
    }else {
      this.navCtrl.push('RecordDetailPage', {
        item: item
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

}
