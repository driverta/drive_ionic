import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ProvidersUserProvider } from '../../providers/providers';
import { WorkoutService } from '../../providers/workout/workout';

import { Levels } from '../../providers/providers';
import { SortByGainsPipe } from '../../pipes/sort-by-gains/sort-by-gains'

import firebase from 'firebase';
import { UserModel } from '../../models/users';
import { CompetingModel } from '../../models/competing';

import { tap } from 'rxjs/operators';
import { TimelineChartComponent } from '../../components/timeline-chart/timeline-chart';


@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class SearchPage {
  // @ViewChild(TimelineChartComponent) timelineChart: TimelineChartComponent;
  @ViewChild('timelineContainer', { read: ViewContainerRef }) container;

  currentItems: any = [];
  timeFilter = "All Time"
  user: any;
  username: String;
  rank = "Frail Body"
  loop = 0;
  gains = 0;
  loop2 = 0;
  show = true;
  total = false;
  week = false;
  month = false;
  day = false;
  segment = "week";
  hideTimeline = true;
  charts: any[];
  competingUsers: UserModel[] = new Array<UserModel>();

  players= [
    {name: "tom", level: 3, gains: 100, profilePic: "", totalGains: [], rank: "Frail Body"}
  ]

  constructor(
    public alertCtrl: AlertController, 
    public levels: Levels, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userService: ProvidersUserProvider,
    public workoutService: WorkoutService,
    private gainsPipe: SortByGainsPipe,
    private resolver: ComponentFactoryResolver
  ) {
      this.user = this.userService.getUser();
    }

  addCompetitors() {
    this.navCtrl.push('AddCompetitorsPage')
  }

  ionViewWillEnter(){
    this.show = true;
    this.username = this.user.username;
    this.players = [];
    this.segment = "week"


    this.userService.getLeaderboardData(this.userService.getUser().id).subscribe(data =>{
      this.competingUsers = data;
      this.competingUsers.forEach(player => {
        this.userService.getProfilePic(player.username).subscribe(pic => {
          player.profilePic = "data:image/jpeg;base64," + pic;
        })
      })
      this.show = false;
      this.filterDay('Week');
    });
  }

  setLevel (gains, i) {
    this.levels._levels.forEach( value => {
      if (gains > value.totalPoints) {
        this.players[i].level = value.level;
        var xlevel = this.players[i].level
      }
      if (xlevel < 10){
        this.players[i].rank = "Frail Body"
      } else if ( xlevel >= 10 && xlevel < 20){
        this.players[i].rank = "Gym Rat"
      } else if ( xlevel >= 20 && xlevel < 30){
        this.players[i].rank = "Bodybuilder"
      } else if ( xlevel > 30){
        this.players[i].rank = "Olympian"
      }
    });
  }

  ionViewDidLoad() {
    this.workoutService.getCompetingWorkouts(this.user.id, 0, 10).subscribe(workouts => {
      console.log(workouts)

      workouts.forEach(workout => {
        if ((workout.startTime != null) && (workout.endTime != null) ) {
          workout.startTime = new Date(workout.startTime);
          workout.endTime = new Date(workout.endTime);
          this.resolver.resolveComponentFactory
          const factory = this.resolver.resolveComponentFactory(TimelineChartComponent);
          let componentRef = this.container.createComponent(factory);
          (<TimelineChartComponent>componentRef.instance).makeTimelineChart(workout)
        }
      });
    });
  }

  setCharts(display) {
    this.charts.forEach(chart => {
      chart.show = false
    })
  }

  onSegmentChange(){
    this.competingUsers.forEach((user) =>{
      console.log(user.gainsToday)
      switch(this.segment) {
        case "today":
          user.gains = user.gainsToday;
          this.hideTimeline = true;
          break;
        case "week":
          user.gains = user.gainsWeek;
          this.hideTimeline = true;
          break;
        case "timeline":
          this.hideTimeline = false;
          break;
        default:
          user.gains = user.gainsTotal;
          this.hideTimeline = true;
          break;
      }
    });
    this.competingUsers = this.gainsPipe.transform(this.competingUsers)
  }

  filterDay(ev) {
    this.competingUsers.forEach((user) =>{
      switch(ev) {
        case "Today":
          user.gains = user.gainsToday;
          break;
        case "Week":
          user.gains = user.gainsWeek;
          break;
        case "Month":
          user.gains = user.gainsMonth;
          break;
        default:
          user.gains = user.gainsTotal;
          break;
      }
    });
    this.competingUsers = this.gainsPipe.transform(this.competingUsers)
  }

  presentConfirm(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to remove ' + x.name + ' from your leaderboard?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.removeCompetingUser(x);
          }
        }
      ]
    });
    alert.present();
  }

  removeCompetingUser(competingUser) {
    let competing = new CompetingModel;
    competing.id = this.user.id;
    competing.competingUser = competingUser.id
    this.userService.removeCompetingUser(competing).subscribe(data => {
      console.log(data);
      this.ionViewWillEnter();
    })
  }

  openItem(item){
    this.navCtrl.push('SettingsPage', {
      item: item
    });
  }
}
