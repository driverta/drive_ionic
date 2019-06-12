import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { Items, ProvidersUserProvider, HistoryProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { Levels } from '../../providers/providers';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';
// Import ng-circle-progress
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { Flexibility } from '../../models/Flexibility';
import { BodyLift } from '../../models/BodyLift';
import { LiftingRecords } from '../../models/LiftingRecords';
import { RecordsComponent } from '../../components/records/records';
import { CardioRecord } from '../../models/CardioRecord';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

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

  xlevel = 1;
	xcurrent = 0;
	xtotal = 0;
	progress = 0;
	gains = 0;

  liftingRecords: LiftingRecords[];
  cardioRecords: CardioRecord[];
  liftingHistory: LiftingHistory[];
  cardioHistory: CardioHistory[];
  bodyLiftHistory: BodyLift[];
  flexHistory: Flexibility[];

  friend: boolean = false;

  @ViewChild(LineChartComponent) lineChart: LineChartComponent
  @ViewChild(RecordsComponent) recordComponent: RecordsComponent


  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public records: Records,
    public levels: Levels,
    private platform: Platform,
    public historyService: HistoryProvider,
    private userService: ProvidersUserProvider,
    private readonly storage: Storage,
    ) {

    this.platform.ready().then((readySource) => {
        // Platform now ready, execute any required native code
    });
    this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
    this.user = navParams.get('user');
    this.storage.get('email').then((email) => {
      if (this.user.email.toUpperCase() != email.toUpperCase()) {
        
        this.friend = true;
        this.segment = "records";
      }
    })


    // if(this.user == null){
    //   this.user = userService.getUser();
    //   this.friend = false;
    // }
  }

  refreshCharts() {
      // if(!this.friend){
      //   this.lineChart.makeLineChart();
      // }
  }

  ionViewWillEnter() {
    if (this.muscleGroup == "Cardio") {
      this.noRecords = true;
      
      this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.cardioHistory = data;
        this.historyService.cardioHistory = this.cardioHistory;
      });
      this.getCardioRecords();
    } else if (this.exercise.bodyLift) {
      this.noRecords = false;
      this.historyService.getBodyLiftByExercise(this.user.id, this.exercise.id).subscribe(bodyLifts => {
        this.historyService.bodyLift = bodyLifts;
      });
    } else if (this.muscleGroup == "Flexibility") {
      this.noRecords = false;
      this.historyService.getFlexByExercise(this.user.id, this.exercise.id).subscribe(flex => {
        this.historyService.flexHistory = flex;
        //this.historyChild.showHistory();
      });
      
    } else {
      this.noRecords = true;
      this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.historyService.liftingHistory = data;
      })
      this.getLiftingRecords();

    }
    this.setUp()
  }
  
  showBar() {
    this.selectedValue = 1;
  }

  setUp() { 
    this.userService.getTotalGains(this.user.id).subscribe(totalGains => {
      this.gains = totalGains;
      this.setLevel();
    });;
  }

  onNotify(gains: number) {
    this.gains += gains
    this.setLevel()
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints - 1) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    })
  }

  showLine() {
    this.selectedValue = 2;
  }

  hideCharts() {
    this.selectedValue = 0;
  }

  private getLiftingRecords() {
    this.historyService.getLiftingRecords(this.user.id, this.exercise.id).subscribe(liftingRecords => {
      this.liftingRecords = liftingRecords;
      console.log(liftingRecords);
    })
  }

  private getCardioRecords() {
    this.historyService.getCardioRecords(this.user.id, this.exercise.id).subscribe(cardioRecords => {
      this.cardioRecords = cardioRecords;
      console.log(this.cardioRecords);
    })
  }
}
