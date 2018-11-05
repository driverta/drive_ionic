import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { Items, ProvidersUserProvider, HistoryProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { Levels } from '../../providers/providers';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';
import { HistoryComponent } from '../../components/history/history';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { Flexibility } from '../../models/Flexibility';
<<<<<<< HEAD
import { NewSetComponent } from '../../components/new-set/new-set';
=======
import { BodyLift } from '../../models/BodyLift';
>>>>>>> master

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
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

  xlevel = 1;
	xcurrent = 0;
	xtotal = 0;
	progress = 0;
	gains = 0;

  liftingHistory: LiftingHistory[];
  cardioHistory: CardioHistory[];
  bodyLiftHistory: BodyLift[];
  flexHistory: Flexibility[];

  private friend: boolean = true;

<<<<<<< HEAD
  @ViewChild(BarChartComponent) barChart: BarChartComponent
  @ViewChild(LineChartComponent) lineChart: LineChartComponent
  @ViewChild(Slides) slides: Slides;
=======
  @ViewChild(HistoryComponent) historyChild: HistoryComponent;
  @ViewChild(BarChartComponent) barChart: BarChartComponent;
  @ViewChild(LineChartComponent) lineChart: LineChartComponent;
>>>>>>> master

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

  refreshCharts() {
    this.barChart.makeBarChart();
      if(!this.friend){
        this.lineChart.makeLineChart();
      }
  }

  ionViewWillEnter() {
    console.log("hey")
    if (this.muscleGroup == "Cardio") {
      this.noRecords = true;
      
      
      this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.cardioHistory = data;
        this.historyService.cardioHistory = this.cardioHistory.reverse();
        this.barChart.makeBarChart();
        if(!this.friend){
          this.lineChart.makeLineChart();
        }
      });
    } else if (this.exercise.bodyLift) {
      this.noRecords = false;
      this.historyService.getBodyLiftByExercise(this.user.id, this.exercise.id).subscribe(bodyLifts => {
        this.historyService.bodyLift = bodyLifts.reverse();
      });
    } else if (this.muscleGroup == "Flexibility") {
      this.noRecords = false;
      this.historyService.getFlexByExercise(this.user.id, this.exercise.id).subscribe(flex => {
        this.historyService.flexHistory = flex;
        //this.historyChild.showHistory();
      });
    } else {
      this.noRecords = true;
      console.log("here")
      this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        console.log(data);
        this.historyService.liftingHistory = data.reverse();
        console.log(this.historyChild)
        this.barChart.makeBarChart();
        if(!this.friend){
          console.log("there")
          this.lineChart.makeLineChart();
        }
      })
    }
    this.setUp()
  }
  
  showBar() {
    this.selectedValue = 1;
  }

  setUp(){
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
}
