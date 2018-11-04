import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { Items, ProvidersUserProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { Levels } from '../../providers/providers';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { Flexibility } from '../../models/Flexibility';

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
    if (this.exercise.MuscleGroup.muscleGroupName == "Flexibility" || this.exercise.bodyLift){
      this.noRecords = false;
    } else {
      this.noRecords = true;
    }

    if(this.friend){
      if (this.exercise.MuscleGroup.muscleGroupName != Flexibility || !this.exercise.bodyLift) {
        this.barChart.makeBarChart();
      }
    }
    else{
      if (this.exercise.MuscleGroup.muscleGroupName != Flexibility || !this.exercise.bodyLift) {
        this.barChart.makeBarChart();
        this.lineChart.makeLineChart();
      }
    }
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
