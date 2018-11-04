import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { Items, ProvidersUserProvider, HistoryProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { Levels } from '../../providers/providers';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { Flexibility } from '../../models/Flexibility';
import { BodyLift } from '../../models/BodyLift';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {

  selectedValue = 0;
  exercise: any;
  user: any;
  username: any;
  segment = "set";
  loop = 0;
  checkRec = false;
  noRecords = true;
  history = [];
  muscleGroup: any;

  liftingHistory: LiftingHistory[];
  cardioHistory: CardioHistory[];
  bodyLiftHistory: BodyLift[];
  flexHistory: Flexibility[];

  private friend: boolean = true;

  @ViewChild(BarChartComponent) barChart: BarChartComponent
  @ViewChild(LineChartComponent) lineChart: LineChartComponent

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public records: Records,
    public levels: Levels,
    private platform: Platform,
    private storage: Storage,
    public historyService: HistoryProvider,
    private userService: ProvidersUserProvider) {
    this.platform.ready().then((readySource) => {
        // Platform now ready, execute any required native code
      });
    this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
    this.user = navParams.get('user');
    if(this.user == null){
      this.user = userService.getUser();
      this.friend = false;
    }
  }

  ionViewWillEnter() {

    if (this.muscleGroup == "Cardio") {
      this.noRecords = true;
      
      
      this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.cardioHistory = data;
        this.historyService.cardioHistory = this.cardioHistory;
        this.barChart.makeBarChart();
        if(!this.friend){
          this.lineChart.makeLineChart();
        }
      });
    } else if (this.exercise.bodyLift) {
      this.noRecords = false;
      this.historyService.getBodyLiftByExercise(this.user.id, this.exercise.id).subscribe(bodyLifts => {
        this.historyService.bodyLift = bodyLifts;
      });
    } else if (this.muscleGroup == "Flexibility") {
      this.noRecords = false;
      this.historyService.getFlexByExercise(this.user.id, this.exercise.id).subscribe(flex => {
        this.historyService.flexHistory = flex;
      });
    } else {
      this.noRecords = true;
      console.log("here")
      this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        console.log(data);
        this.historyService.liftingHistory = data;
        this.barChart.makeBarChart();
        if(!this.friend){
          console.log("there")
          this.lineChart.makeLineChart();
        }
      })
    }

    // if(this.friend){
    //   if (this.exercise.MuscleGroup.muscleGroupName != Flexibility || !this.exercise.bodyLift) {
    //     this.barChart.makeBarChart();
    //   }
    // }
    // else{
    //   if (this.exercise.MuscleGroup.muscleGroupName != Flexibility || !this.exercise.bodyLift) {
    //     this.barChart.makeBarChart();
    //     this.lineChart.makeLineChart();
    //   }
    // }
  }
  
  showBar() {
    this.selectedValue = 1;
  }

  showLine() {
    this.selectedValue = 2;
  }

  hideCharts() {
    this.selectedValue = 0;
  }
}
