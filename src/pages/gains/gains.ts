import { Component, ViewChild } from '@angular/core';
import { IonicPage, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { User, ProvidersUserProvider, HistoryProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { CardioHistory } from '../../models/CardioHistory';
import { LiftingHistory } from '../../models/LiftingHistory';

import { GainsChartComponent } from '../../components/gains-chart/gains-chart';
import { CardioTimeConvertPipe } from '../../pipes/cardio-time-convert/cardio-time-convert'


@IonicPage()
@Component({
  selector: 'page-gains',
  templateUrl: 'gains.html',
})




export class GainsPage {

  filter = "All";

  @ViewChild(GainsChartComponent) gainsChart: GainsChartComponent

   constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actShtCtrl: ActionSheetController,
    private storage: Storage,
    private userService: ProvidersUserProvider,
    private historyService: HistoryProvider) {

    }

    ionViewDidLoad() {
      this.gainsChart.makeGainsChart([this.filter]);
    }

    filterGains(){
    let actionSheet = this.actShtCtrl.create({
      title: 'Filter Exercises By Muscle Group',
      buttons: [
        {
          text: 'All',
          handler: () => {
            this.filter = "All";
            this.gainsChart.makeGainsChart(this.filter);
          }
        },{
          text: 'Chest',
          handler: () => {
            this.filter = "Chest";
            this.gainsChart.makeGainsChart(this.filter)
          }
        },{
          text: 'Back',
          handler: () => {
            this.filter = "Back";
            this.gainsChart.makeGainsChart(this.filter)          
          }
        },{
          text: 'Legs',
          handler: () => {
            this.filter = "Legs";
            this.gainsChart.makeGainsChart(this.filter)          
          }
        },{
          text: 'Core',
          handler: () => {
            this.filter = "Core";
            this.gainsChart.makeGainsChart(this.filter)          
          }
        },{
          text: 'Shoulders',
          handler: () => {
           this.filter = "Shoulders";
            this.gainsChart.makeGainsChart(this.filter)
          }
        },{
          text: 'Arms',
          handler: () => {
            this.filter = "Arms";
            this.gainsChart.makeGainsChart(this.filter)          
          }
        },{
          text: 'Cardio',
          handler: () => {
            this.filter = "Cardio";
            this.gainsChart.makeGainsChart(this.filter)          
          }
        },{
          text: 'Other',
          handler: () => {
            this.filter = "Other";
            this.gainsChart.makeGainsChart(this.filter)          
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
	

}
