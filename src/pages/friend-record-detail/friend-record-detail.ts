import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { FriendProfileBarComponent } from '../../components/friend-profile-bar/friend-profile-bar';
import firebase from 'firebase';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@IonicPage()
@Component({
  selector: 'page-friend-record-detail',
  templateUrl: 'friend-record-detail.html',
})
export class FriendRecordDetailPage {

  exercise: any;
  username: any;
  checkRec = false;

  @ViewChild(FriendProfileBarComponent) barChart: FriendProfileBarComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
  	private storage: Storage
  	) {
  	this.exercise = navParams.get('item');
    this.username = navParams.get("username");
  }

  ionViewWillEnter() {
    this.records._records = [
      
    ];
    this.records._chart = [
      
    ];
    
    this.getRecords();
  }

  getRecords() {
    
    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    
    queryHistory.once("value").then( snapshot => {
      //alert("D")
      console.log(snapshot)
      snapshot.forEach( childSnapshot => {
        //alert("BRUH")
        var childData1 = childSnapshot.val();
        this.checkRec = false;
        this.records._records.forEach( (value, index) => {
          if (childData1.reps == value.reps) {
            this.checkRec = true;
            if (childData1.weight > value.weight) {
              this.records._records[index].weight = childData1.weight;
              this.records._records[index].oneRM = childData1.oneRM;
              this.records._records[index].records++;
            }
          }
        });
        if (this.checkRec == false){
          this.records._records.push({reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: 1})
        }
      });
    });
    this.barChart.makeChart();
  }

}
