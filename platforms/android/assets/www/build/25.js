webpackJsonp([25],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    return EditProfilePageModule;
}());
EditProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
    })
], EditProfilePageModule);

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, viewCtrl, formBuilder, navParams, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loop = 0;
        this.show = false;
        this.lifts = {};
        this.setlifts = {};
        this.gains = {};
        this.users = [];
        this.username = "test";
        this.info = { username: this.username, weight: null, height: null, gym: "", location: "" };
        this.bool = true;
        this.edit = false;
        this.competitorsList = [];
        this.competingList = [];
        this.form = formBuilder.group({
            username: [''],
            weight: [''],
            height: [''],
            gym: [''],
            location: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        //this.myrecords = navParams.get('records') || records._records;
    }
    EditProfilePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        this.username = localStorage.getItem("username");
        this.info.username = this.username;
        console.log(this.username);
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    EditProfilePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    EditProfilePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    /*
    checkUsername(){
      console.log(this.info.username)
      if(this.info.username != this.username){
        this.show = true
        var query1 = firebase.database().ref('/users');
        query1.once("value").then( snapshot => {
          this.loop = 0;
          snapshot.forEach( childSnapshot => {
            var childData1 = childSnapshot.val();
            this.loop++
            if ( this.info.username == childData1.name ) {
              this.show = false;
              this.repeatUsername()
              return;
            }
            if ( snapshot.numChildren() == this.loop && this.show == true) {
              this.changeData();
            }
          });
        });
      } else {
        this.changeData();
      }
    }
    */
    EditProfilePage.prototype.changeData = function () {
        /*
        if(this.info.username != this.username){
          
          localStorage.setItem("username",this.info.username)
    
          var user = firebase.database().ref('/users/' + this.username);
          user.once("value").then( snapshot => {
            var newUser = snapshot.val();
            var user = firebase.database().ref('/users' + this.info.username);
            user.set(newUser);
          })
    
          this.getUsers().then((val) => {
            this.users = val;
            this.users.push(this.username);
            this.storage.set('/users', this.users);
          })
    
          this.getExercises().then((val) => {
            this.lifts = val;
            this.storage.set(this.info.username + '/exercises', this.lifts)
            var exercises = firebase.database().ref(this.info.username + '/exercises');
            exercises.set(this.lifts);
          })
    
          this.getGains().then((val) => {
            this.gains = val;
            this.storage.set(this.info.username + '/gains', this.gains)
            var gains  = firebase.database().ref(this.info.username + '/gains');
            gains.set(this.gains);
          })
    
          var queryCompeting = firebase.database().ref('/' + this.username + '/competing');
          queryCompeting.once("value").then( snapshot => {
            var newList = snapshot.val();
            var competing = firebase.database().ref('/' + this.info.username + '/competing');
            competing.set(newList);
            snapshot.forEach( childSnapshot => {
              var childData1 = childSnapshot.val();
              var thisUser = childData1.name
              console.log(thisUser + "USER");
              var thisUsersCompetitors = firebase.database().ref('/' + thisUser + '/competitors');
              thisUsersCompetitors.once("value").then( snapshot2 => {
                this.competitorsList = [];
                snapshot2.forEach( childSnapshot2 => {
                  var childData2 = childSnapshot2.val();
                  console.log(childData2);
                  if (childData2 != this.username){
                    this.competitorsList.push(childData2)
                  }
                })
              }).then(() => {
                this.competitorsList.push(this.info.username)
                thisUsersCompetitors.set(this.competitorsList)
              })
            })
          })
    
          
          var queryCompetitors = firebase.database().ref('/' + this.username + '/competitors');
          queryCompetitors.once("value").then( snapshot => {
            var newList = snapshot.val();
            var competitors = firebase.database().ref('/' + this.info.username + '/competitors');
            competitors.set(newList);
            snapshot.forEach( childSnapshot => {
              var childData1 = childSnapshot.val();
              var thisUser = childData1.name
    
              var thisUsersCompeting = firebase.database().ref('/' + thisUser + '/competing');
              thisUsersCompeting.once("value").then( snapshot2 => {
                this.competingList = [];
                snapshot2.forEach( childSnapshot2 => {
                  var childData2 = childSnapshot2.val();
                  //console.log(childData2);
                  if (childData2 != this.username){
                    this.competingList.push(childData2)
                  }
                })
              }).then(() => {
                this.competingList.push(this.info.username)
                thisUsersCompeting.set(this.competitorsList)
              })
            })
          })
    
          var queryPic = firebase.database().ref('/users/' + this.username + '/profilePic');
          queryPic.once("value").then( snapshot => {
            var pic = snapshot.val();
            var profilePic = firebase.database().ref('/users/' + this.info.username + '/profilePic');
            profilePic.set(pic);
          })
          
        }
        */
        var weight = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/users/' + this.info.username + '/weight');
        weight.set(this.info.weight);
        var height = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/users/' + this.info.username + '/height');
        height.set(this.info.height);
        var gym = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/users/' + this.info.username + '/gym');
        gym.set(this.info.gym);
        var location = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/users/' + this.info.username + '/location');
        location.set(this.info.location);
        this.done();
    };
    EditProfilePage.prototype.getUsers = function () {
        return this.storage.get('/users');
    };
    EditProfilePage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    EditProfilePage.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    EditProfilePage.prototype.repeatUsername = function () {
        var alert = this.alertCtrl.create({
            title: "Someone is already using this username.",
            buttons: ['Ok']
        });
        alert.present();
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Profile</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="changeData();" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="changeData()">\n\n    <ion-list>\n\n      <ion-item>\n\n      <ion-label fixed>Weight:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="info.weight" placeholder="195" formControlName="weight"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n      	<ion-label fixed>Height:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="info.height" placeholder="6.1" formControlName="height"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n      	<ion-label fixed>Gym:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="info.gym" placeholder="xSport" formControlName="gym"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n      	<ion-label fixed>Location:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="info.location" placeholder="fairfax"  formControlName="location"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <h3 *ngIf="show" id="loading">Loading</h3>\n\n  </form>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\edit-profile\edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=25.js.map