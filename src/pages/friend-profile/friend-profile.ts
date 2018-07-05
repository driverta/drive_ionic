import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Levels } from '../../providers/providers';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-profile',
  templateUrl: 'friend-profile.html',
})
export class FriendProfilePage {

	username: any;
	user: any;
  myUsername: any;
  players = [];
  rank = "Frail Body"
  weight = 0
  height = "0"
  gym = "gym"
  location = "location"
	xlevel = 1;
  xcurrent = 25;
  xtotal = 100;
  progress = 25;
  gains = 0;
  records = 0;
  competing = 0;
  competitors = 0;
  competingList = [];
  competitorsList = [];
  realCompetitorsList = [];
  loop = 0;
  exercisesLength = 0;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public levels: Levels,
    public alertCtrl: AlertController,
    private userService: ProvidersUserProvider) {

  	this.user = navParams.get('item');
    this.username = this.user.name;
    this.myUsername = this.userService.getUser().username;
  }

  ionViewDidLoad() {
    
    this.weight = this.user.weight;
    this.height = this.user.height;
    this.gym = this.user.gym;
    this.location = this.user.location;
    //this.gym = data.gym;

    this.userService.getTotalGains(this.user.id).subscribe(totalGains => {
      console.log(totalGains);
      if (totalGains) {
        this.gains = totalGains;
      } else this.gains = 0;
      this.setLevel();
    });;

    // var queryGains = firebase.database().ref('/' + this.username + '/gains');
    // queryGains.once("value").then( snapshot => {
    //   this.loop = 0;
    //   this.gains = 0;
    //   this.records = 0;
    //   snapshot.forEach( childSnapshot => {
    //     this.loop++
    //     var childData1 = childSnapshot.val();
    //     var gains = childData1.gains;
    //     this.gains = this.gains + gains
    //     if (gains == 10){
    //       this.records++;
    //     }
    //     if ( snapshot.numChildren() == this.loop )
    //       this.setLevel()
    //   })
    // })

    this.userService.getCompetingUsers(this.user.id).subscribe(data => {
      this.competingList = data;
      console.log(this.competingList);
      this.competing = this.competingList.length;
    })

    // var queryCompeting = firebase.database().ref('/' + this.username + '/competing');
    // queryCompeting.once("value").then( snapshot => {
    //   this.competing = 0;
    //   this.competingList = [];
    //   snapshot.forEach( childSnapshot => {
    //     var childData1 = childSnapshot.val();
    //     this.competingList.push(childData1)
    //     //console.log(this.competingList)
    //     this.competing++
    //     //console.log(this.competing)
    //   })
    // })

    this.userService.getCompetitors(this.user.id).subscribe(data => {
      this.competitorsList = data;
      console.log(this.competitorsList);
      this.competitors = this.competitorsList.length;
    })
    
    // var queryCompetitors = firebase.database().ref('/' + this.username + '/competitors');
    // queryCompetitors.once("value").then( snapshot => {
    //   this.competitors = 0;
    //   this.competitorsList = [];
    //   snapshot.forEach( childSnapshot => {
    //     this.competitors++
    //     var childData1 = childSnapshot.val();
    //     this.competitorsList.push(childData1);
        
    //   })
    // })

    // var queryWeight = firebase.database().ref('/users/' + this.username + '/weight');
    // queryWeight.once("value").then( snapshot => {
    //   var weight = snapshot.val();
    //   if (weight){
    //     this.weight = weight
    //   }
    // })

    // var queryHeight = firebase.database().ref('/users/' + this.username + '/height');
    // queryHeight.once("value").then( snapshot => {
    //   var height = snapshot.val();
    //   if (height){
    //     this.height = height
    //   }
    // })

    // var queryGym = firebase.database().ref('/users/' + this.username + '/gym');
    // queryGym.once("value").then( snapshot => {
    //   var gym = snapshot.val();
    //   if (gym){
    //     this.gym = gym
    //   }
    // })

    // var queryLocation = firebase.database().ref('/users/' + this.username + '/location');
    // queryLocation.once("value").then( snapshot => {
    //   var location = snapshot.val();
    //   if (location){
    //     this.location = location
    //   }
    // })

    this.userService.getCompetingUsersExercises(this.user.id).subscribe(exercises => {
      this.exercisesLength = exercises.length;
    });

    // var query2 = firebase.database().ref("/" + this.username + '/competing');

    // query2.once("value").then( snapshot => {
    //   this.players = [];
    //   snapshot.forEach( childSnapshot => {
        
    //     var childData1 = childSnapshot.val();
        
    //     this.players.push(childData1)
    //     //alert(this.user._user);      
    //   });
    // });
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
      if (this.xlevel < 10){
        this.rank = "FRAIL BODY"
      } else if ( this.xlevel >= 10 && this.xlevel < 20){
        this.rank = "GYM RAT"
      } else if ( this.xlevel >= 20 && this.xlevel < 30){
        this.rank = "BODYBUILDER"
      } else if ( this.xlevel > 30){
        this.rank = "OLYMPIAN"
      }
    });
  }

  getProfileImageStyle() {

    try {
      //this.noLoad();
      return 'url(' + this.user.profilePic + ')'
    }
    catch(err){
    }
    finally{ 
    }
  }

  goToCompeting(){
    console.log(this.competingList)
    this.navCtrl.push('FriendCompetingPage', {
      list: this.competingList
    });

  }

  goToCompetitors(){
    this.navCtrl.push('CompetitorsPage', {
      list: this.competitorsList
    });
    // this.realCompetitorsList = [];
    // console.log(this.competitorsList)
    // this.competitorsList.forEach((val) => {
    //   this.loop = 0;
    //   var queryPic = firebase.database().ref('/users/' + val + '/profilePic');
    //   queryPic.once("value").then( snapshot => {
    //     var pic = snapshot.val();
    //     this.realCompetitorsList.push({name: val, profilePic: pic})
    //     this.loop++
    //     if (this.loop == this.competitorsList.length){
    //       this.navCtrl.push('CompetitorsPage', {
    //         list: this.realCompetitorsList,
    //         competing: this.competingList,
    //       });
    //     }
    //   })
    // })
  }

  goToRecords(){
    this.navCtrl.push('FriendRecordsPage', {
      user: this.user
    });
  }

  goToGains(){
    this.navCtrl.push('FriendGainsPage', {
      user: this.user
    });
  }

  addToLeaderboard(){
    var check = true;
    
    this.players.forEach( value => {

      if (value.name == this.username) {

        this.alreadyCompeting();
        check = false;
      } 
    })
    
    if(check){
      var competing = firebase.database().ref('/' + this.username + '/competing');
      competing.child(this.username).set(this.user);

      var competitors = firebase.database().ref('/' + this.username + '/competitors');
      competitors.child(this.username).set(this.username);
      this.playerAdded();
    }
  }

  alreadyCompeting() {
    let alert = this.alertCtrl.create({
      title: 'You are already Cometing with this player!',
      buttons: ['Ok']
    });
    alert.present();
  }

  playerAdded() {
    let alert = this.alertCtrl.create({
      title: 'Player added to your leaderboard!',
      buttons: ['Ok']
    });
    alert.present();
  }

}
