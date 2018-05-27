import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { CardioProfileBarComponent } from '../../components/cardio-profile-bar/cardio-profile-bar';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@IonicPage()
@Component({
  selector: 'page-record-cardio-detail',
  templateUrl: 'record-cardio-detail.html',
})
export class RecordCardioDetailPage {

  exercise: any;
  username: any;
  checkRec = false;
  tempRec = [];

  @ViewChild(CardioProfileBarComponent) cardioBar: CardioProfileBarComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
  	private storage: Storage
  	) {
  	this.exercise = navParams.get('item');
  }

  ionViewWillEnter() {
    this.tempRec = this.records._cardio;

    this.records._cardioRecords = [
      
    ];
    this.records._chart = [
      
    ];
    this.username = localStorage.getItem("username");
    
    this.getRecords();
  }

  getRecords() {
    /*
    this.getExercises().then((val) => {
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach( (workout) => {
          //alert(history[workout].minutes)
          this.tempRec.forEach( (value, index) => {
            
            if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
              //alert("in")
              if (history[workout].mph > value.mph) {
                this.tempRec[index].miles = history[workout].miles;
                this.tempRec[index].time = history[workout].time;
                this.tempRec[index].mph = history[workout].mph;
                this.tempRec[index].records++;
              }
            }
          });
        })
      }
    }).then(() => {
      this.tempRec.forEach ((value) => {
        if (value.records > 0){
          //alert(value.records)
          this.records._cardioRecords.push(value)
        }
      })
      //console.log(this.records._cardioRecords)  
    })
    */

    this.cardioBar.makeChart();
  }
  
  /*
  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }
  */
}
