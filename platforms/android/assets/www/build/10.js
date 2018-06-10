webpackJsonp([10],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRecordsPageModule", function() { return FriendRecordsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_records__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FriendRecordsPageModule = (function () {
    function FriendRecordsPageModule() {
    }
    return FriendRecordsPageModule;
}());
FriendRecordsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__friend_records__["a" /* FriendRecordsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__friend_records__["a" /* FriendRecordsPage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
        ],
    })
], FriendRecordsPageModule);

//# sourceMappingURL=friend-records.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys_keys__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__ = __webpack_require__(588);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__["a" /* SortByGainsPipe */],
            __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__["a" /* SortByRepsPipe */],
            __WEBPACK_IMPORTED_MODULE_3__keys_keys__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__["a" /* SortByMinutesPipe */],
            __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__["a" /* CardioTimeConvertPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__["a" /* SortByGainsPipe */],
            __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__["a" /* SortByRepsPipe */],
            __WEBPACK_IMPORTED_MODULE_3__keys_keys__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__["a" /* SortByMinutesPipe */],
            __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__["a" /* CardioTimeConvertPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByGainsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortByGainsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortByGainsPipe = (function () {
    function SortByGainsPipe() {
    }
    SortByGainsPipe.prototype.transform = function (array, args) {
        //alert("What");
        array.sort(function (a, b) {
            if (a.gains < b.gains) {
                return -1;
            }
            else if (a.gains > b.gains) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array.reverse();
    };
    return SortByGainsPipe;
}());
SortByGainsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortByGains',
        pure: false
    })
], SortByGainsPipe);

//# sourceMappingURL=sort-by-gains.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByRepsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortByRepsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortByRepsPipe = (function () {
    function SortByRepsPipe() {
    }
    SortByRepsPipe.prototype.transform = function (array, args) {
        //alert("What");
        array.sort(function (a, b) {
            if (a.reps < b.reps) {
                return -1;
            }
            else if (a.reps > b.reps) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return SortByRepsPipe;
}());
SortByRepsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortByReps',
        pure: false
    })
], SortByRepsPipe);

//# sourceMappingURL=sort-by-reps.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        // create instance vars to store keys and final output
        var keyArr = Object.keys(value), dataArr = [];
        // loop through the object,
        // pushing values to the return array
        keyArr.forEach(function (key) {
            dataArr.push(value[key]);
        });
        // return the resulting array
        return dataArr;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'keys',
        pure: false
    })
], KeysPipe);

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByMinutesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortByMinutesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortByMinutesPipe = (function () {
    function SortByMinutesPipe() {
    }
    SortByMinutesPipe.prototype.transform = function (array, args) {
        //alert("What");
        array.sort(function (a, b) {
            if (a.max < b.max) {
                return -1;
            }
            else if (a.max > b.max) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return SortByMinutesPipe;
}());
SortByMinutesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortByMinutes',
        pure: false
    })
], SortByMinutesPipe);

//# sourceMappingURL=sort-by-minutes.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardioTimeConvertPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CardioTimeConvertPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CardioTimeConvertPipe = (function () {
    function CardioTimeConvertPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CardioTimeConvertPipe.prototype.transform = function (value) {
        // console.log(value)
        // let  temp = value * 60;
        // const hours = Math.floor((temp/3600));
        // const minutes: number = Math.floor((temp/ 60)/60);
        // console.log(minutes)
        // const seconds=Math.floor(temp % 3600 % 60);
        var hours = Math.floor(value / 60);
        var minutesLeftOver = value - (hours * 60);
        var minutes = Math.floor(minutesLeftOver);
        var secondsLeftOver = (minutesLeftOver - minutes) * 60;
        var seconds = Math.floor(secondsLeftOver);
        return hours + ':' + minutes + ':' + seconds;
    };
    return CardioTimeConvertPipe;
}());
CardioTimeConvertPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'cardioTimeConvert',
    })
], CardioTimeConvertPipe);

//# sourceMappingURL=cardio-time-convert.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise() {
    }
    return Exercise;
}());

//# sourceMappingURL=Exercise.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_user_providers_user__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exercise_exercise__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Exercise__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendRecordsPage = (function () {
    function FriendRecordsPage(navCtrl, navParams, storage, alertCtrl, actShtCtrl, userService, exerciseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.actShtCtrl = actShtCtrl;
        this.userService = userService;
        this.exerciseService = exerciseService;
        this.filteredExercises = [];
        this.bool = true;
        this.filter = "All";
        this.user = navParams.get('user');
        this.username = this.user.name;
        this.myUsername = this.userService.getUser().username;
    }
    FriendRecordsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getCompetingUsersExercises(this.user.id).subscribe(function (exercises) {
            _this.exercises = exercises;
            _this.filteredExercises = exercises;
        });
        // var query1 = firebase.database().ref('/' + this.username + '/exercises');
        // query1.once("value").then( snapshot => {
        //   snapshot.forEach( childSnapshot => {
        //     var childData1 = childSnapshot.val();
        //     var key = childSnapshot.key;
        //     this.setlifts[key] = childData1;
        //     this.lifts = this.setlifts
        //   });
        // });
        // this.getExercises().then((val) => {
        //   console.log(val)
        //   this.myLifts = val;
        // });
    };
    FriendRecordsPage.prototype.openItem = function (item) {
        if (item.MuscleGroup.muscleGroupName == "Cardio") {
            this.navCtrl.push('FriendCardioRecordDetailPage', {
                item: item,
                user: this.user
            });
        }
        else {
            this.navCtrl.push('FriendRecordDetailPage', {
                item: item,
                user: this.user
            });
        }
    };
    FriendRecordsPage.prototype.filterExercises = function () {
        var _this = this;
        var actionSheet = this.actShtCtrl.create({
            title: 'Filter Exercises By Muscle Group',
            buttons: [
                {
                    text: 'All',
                    handler: function () {
                        _this.filteredExercises = _this.exercises;
                    }
                }, {
                    text: 'Chest',
                    handler: function () {
                        _this.filter = "Chest";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Back',
                    handler: function () {
                        _this.filter = "Back";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Legs',
                    handler: function () {
                        _this.filter = "Legs";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Core',
                    handler: function () {
                        _this.filter = "Core";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Shoulders',
                    handler: function () {
                        _this.filter = "Shoulders";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Arms',
                    handler: function () {
                        _this.filter = "Arms";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Cardio',
                    handler: function () {
                        _this.filter = "Cardio";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Other',
                    handler: function () {
                        _this.filter = "Other";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FriendRecordsPage.prototype.executeFilter = function () {
        var _this = this;
        this.filteredExercises = [];
        this.exercises.forEach(function (exercise) {
            if (exercise.MuscleGroup.muscleGroupName == _this.filter) {
                _this.filteredExercises.push(exercise);
            }
        });
    };
    // getExercises(): Promise<any> {
    //   this.storage.ready().then(() => {
    //     console.log(this.storage.get(this.myUsername + '/exercises'))
    //   })
    //   return this.storage.get(this.myUsername + '/exercises');
    // }
    FriendRecordsPage.prototype.saveExercise = function (exercise) {
        var _this = this;
        console.log("DragonFuckerWasHere");
        this.bool = true;
        this.userService.getExercises().subscribe(function (exercises) {
            for (var _i = 0, exercises_1 = exercises; _i < exercises_1.length; _i++) {
                var myExercise = exercises_1[_i];
                if (myExercise.exerciseName == exercise.exerciseName
                    && myExercise.variation == exercise.variation
                    && myExercise.MuscleGroup.id == exercise.MuscleGroup.id) {
                    _this.presentAlert();
                    _this.bool = false;
                }
            }
            if (_this.bool) {
                var newExercise = new __WEBPACK_IMPORTED_MODULE_5__models_Exercise__["a" /* Exercise */];
                newExercise.exerciseName = exercise.exerciseName;
                newExercise.variation = exercise.variation;
                newExercise.MuscleGroup = exercise.MuscleGroup;
                _this.exerciseService.createExercise(_this.userService.getUser().id, newExercise).subscribe(function (data) {
                    _this.exerciseAdded();
                });
            }
        });
    };
    //   if(this.bool){
    //     if (Array.isArray(exercise.history)){
    //       exercise.history = [];
    //     } else {
    //       exercise.history = {};
    //     }
    //     var key = exercise.name + '-' + exercise.variation
    //     this.myLifts[key] = exercise
    //     this.storage.set(this.myUsername + '/exercises', this.myLifts).then(() =>{
    //       this.exerciseAdded();
    //     });
    //   }
    // }
    FriendRecordsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Duplicate Exercise',
            subTitle: 'You already have an exercise with this name and Variation',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    FriendRecordsPage.prototype.exerciseAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Exercise added to your list!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return FriendRecordsPage;
}());
FriendRecordsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friend-records',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/friend-records/friend-records.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exercises</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="filterExercises()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<ion-list >\n    <ion-item (click)="openItem(item)" *ngFor="let item of filteredExercises | keys">\n  \n      <h2 >{{item.exerciseName}}\n        <button ion-button icon-only (click)="saveExercise(item)">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </h2>\n      <p>{{item.variation}}</p>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/friend-records/friend-records.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_exercise_exercise__["a" /* ExerciseProvider */]])
], FriendRecordsPage);

//# sourceMappingURL=friend-records.js.map

/***/ })

});
//# sourceMappingURL=10.js.map