import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { ProfileBarComponent } from '../../components/profile-bar/profile-bar';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@IonicPage()
@Component({
  selector: 'page-record-detail',
  templateUrl: 'record-detail.html',
})
export class RecordDetailPage {

	exercise: any;
  username: any;
  checkRec = false;

  @ViewChild(ProfileBarComponent) barChart: ProfileBarComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
  	private storage: Storage
  	) {
  	this.exercise = navParams.get('item');
  }

  ionViewWillEnter() {
    this.records._records = [
      
    ];
    this.records._chart = [
      
    ];
    this.username = localStorage.getItem("username");
    
    this.getRecords();
  }

  getRecords() {
    this.getExercises().then((val) => {
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach ( (set) => {
          this.checkRec = false;
          this.records._records.forEach( (value, index) => {
            if (history[set].reps == value.reps) {
              this.checkRec = true;
              if (history[set].weight > value.weight) {
                this.records._records[index].weight = history[set].weight;
                this.records._records[index].oneRM = history[set].oneRM;
                this.records._records[index].records++;
              }
            }
          });
          if (this.checkRec == false){
            this.records._records.push({reps: history[set].reps, weight: history[set].weight, oneRM: history[set].oneRM, records: 1})
          }
        })
      }
    });

    this.barChart.makeChart();
  }
  
  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

}
