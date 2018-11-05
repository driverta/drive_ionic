import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';
import firebase from 'firebase';

import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { FcmProvider } from '../../providers/fcm/fcm';

import { UserModel } from '../../models/users';
import { Exercise } from '../../models/Exercise';

import { CompetingModel } from '../../models/competing';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators/debounceTime';

/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  
  currentItems: any = [];
  currentExercises: any = [];
  exercises: Exercise[];
	users: UserModel[];
  competing: CompetingModel[];
	username: any;
  userId: number;
  id: number;
  bool: boolean;
  loop = 0;
  likelyFriends: any = []; 
  competingFriends: any = []; 
  competingFriendsOfFriends: any = [];
  show = false;
  segment = "discover_people";

  searchTerm: string = '';
  items: any;
  searchControl: FormControl;
  searching: any = false;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public user: User,
    private userService: ProvidersUserProvider,
    public exerciseService: ExerciseProvider,
    private fcm: FcmProvider) {
      this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.pipe(debounceTime(700)).subscribe(search => {
      this.search();
    })
  }

  ionViewWillEnter() {
    this.show = false;
  	this.users = [];
    this.likelyFriends = [];
    this.competingFriends = [];
    this.competingFriendsOfFriends = [];
    this.username = this.userService.getUser().username;
    this.userId = this.userService.getUser().id;
  }

  search() {
    if (this.searchTerm != '' || !this.searchTerm) {
      if (this.segment == "discover_people") {
        this.userService.getFilteredUsersSearch(this.searchTerm).subscribe(data => {
          this.currentItems = data;
          this.searching = false;
        });
      } else {
        this.exerciseService.getFilteredExercisesSearch(this.searchTerm, this.userId).subscribe(data => {
          this.currentExercises = data;
          this.searching = false;
        });
      }
    } else {
      this.searching = false;
    }
  }

  setFilteredItems() {
    if (this.segment == "discover_people") {
      this.filterUsers();
    } else {
      this.filterExercises()
    }
  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
  }

  // On input, display spinner to user
  onSearchInput(){
    this.searching = true;
  }
  
  filterUsers() {
    if (!this.searchTerm || !this.searchTerm.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.users.filter((v) => {
    if(v.username && this.searchTerm) {
      if (v.username.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
        return true;
	      }
	    return false;
	    }
    });
  }

  filterExercises() {
    // let val = ev.target.value;
    if (!this.searchTerm || !this.searchTerm.trim()) {
      this.currentExercises = [];
      return;
    }
    this.currentExercises = this.exercises.filter((v) => {
      if(v.exerciseName && this.searchTerm) {
        if (v.exerciseName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
	    }
    });
  }

  addToExercises(exercise){
    this.bool = true;
    
    this.userService.getExercises().subscribe(exercises => {
      for (let myExercise of exercises) {
        if (myExercise.exerciseName == exercise.exerciseName
          && myExercise.variation == exercise.variation
          && myExercise.MuscleGroup.id == exercise.MuscleGroup.id) {
          this.presentAlert();
          this.bool = false;
        }
      }

      if (this.bool) {
        var newExercise = new Exercise;
        newExercise.exerciseName = exercise.exerciseName;
        newExercise.variation = exercise.variation;
        newExercise.MuscleGroup = exercise.MuscleGroup;
        this.exerciseService.createExercise(this.userService.getUser().id, newExercise).subscribe(data => {
          this.exerciseAdded()
        })
      }
    })
  }
    
  addToLeaderboard(item){
    this.id = item.id;
    let competing = new CompetingModel;
    competing.id = this.userId;
    competing.competingUser = this.id
    this.userService.addCompetingUser(competing).subscribe(data => {
      if(data === "already_exists") {
        this.alreadyCompeting();
      }
      else {
        this.fcm.sendCompetingNotification(item.username, this.userService.getUser().username);
        this.playerAdded();
      }
    })

    // var check = true;

    ////////// needs work ////////
    // this.competingFriends.forEach( value => {
    
    //   if (value.name == item.name) {
    
    //     this.alreadyCompeting();
    //     check = false;
    //   } 
    // })
    ///////////////////
    // let user = this.username;
    // if(check){
      
    //   // var competing = firebase.database().ref('/' + this.username + '/competing');
    //   // competing.child(item.name).set(item);

    //   // var competitors = firebase.database().ref('/' + item.name + '/competitors');
    //   // competitors.child(this.username).set(this.username);
    //   // this.playerAdded();
    // }
  }
  
  // getGains(username): Promise<any> {
  //   var queryGains = firebase.database().ref('/' + username + '/gains');
  //   queryGains.once("value").then( snapshot => {
  //     var totalGains = 0;
  //     snapshot.forEach( childSnapshot => {
  //       var childData1 = childSnapshot.val();
  //       totalGains = totalGains + childData1.gains;
  //     });
  //     console.log(totalGains);
  //     return totalGains;
  //   });
  // }
  
  // getPic(username): Promise<any> {
  //   var queryGains = firebase.database().ref('/users/' + username + '/profilePic');
  //   queryGains.once("value").then( profilePic => {
  //     return profilePic.val()
  //   });
  // }

    // getFriendsOfFriends(friend) {
  //   var query = firebase.database().ref('/' + friend + '/competing');
  
  //   query.once("value").then( snapshot => {
  //     var loop = 0;
  //     snapshot.forEach( childSnapshot => {
  //       var competingFriendOfFriend = childSnapshot.val().name;
  //       if (!this.competingFriendsOfFriends.includes(competingFriendOfFriend) && !this.competingFriends.includes(competingFriendOfFriend)) {
  //         this.competingFriendsOfFriends.push(competingFriendOfFriend);
  //         var likelyFriend = {
  //           name: competingFriendOfFriend,
  //           profilePic: '',
  //           gains: 0,
  //         };
  //         var queryGains = firebase.database().ref('/' + competingFriendOfFriend + '/gains');
  //         var loop = 0;
  //         queryGains.once("value").then( snapshot => {
  //           loop++;
  //           var totalGains = 0;
  //           snapshot.forEach( childSnapshot => {
  //             var childData1 = childSnapshot.val();
  //             totalGains = totalGains + childData1.gains;
  //           });
  //           likelyFriend.gains = totalGains;
  //           var queryGains = firebase.database().ref('/users/' + competingFriendOfFriend + '/profilePic');
  //           queryGains.once("value").then( profilePic => {
  //             likelyFriend.profilePic = profilePic.val();
  //             console.log(likelyFriend);
  //             this.likelyFriends.push(likelyFriend);
  //             if (loop == snapshot.numChildren()) {
  //               this.show = false;
  //             }
  //           });
  //         });      
  //       }  
  //     });
  //   });
  // }

  alreadyCompeting() {
    let alert = this.alertCtrl.create({
      title: 'You are already competing with this player!',
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

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Duplicate Exercise',
      subTitle: 'You already have an exercise with this name and Variation',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  exerciseAdded() {
    let alert = this.alertCtrl.create({
      title: 'Exercise added to your list!',
      buttons: ['Ok']
    });
    alert.present();
  }

  openItem(item){
    this.navCtrl.push('SettingsPage', {
      item: item
    });
  }
}
