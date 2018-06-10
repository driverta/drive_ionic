webpackJsonp([12],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercises__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    return ListMasterPageModule;
}());
ListMasterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__exercises__["a" /* ListMasterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__exercises__["a" /* ListMasterPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__exercises__["a" /* ListMasterPage */]
        ]
    })
], ListMasterPageModule);

//# sourceMappingURL=exercises.module.js.map

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

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exercise_exercise__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers_user_providers_user__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, user, items, records, modalCtrl, alertCtrl, actShtCtrl, storage, platform, exerciseService, userService) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.items = items;
        this.records = records;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.actShtCtrl = actShtCtrl;
        this.storage = storage;
        this.platform = platform;
        this.exerciseService = exerciseService;
        this.userService = userService;
        this.username = "bob";
        this.users = [];
        this.names = ["Lift 1"];
        this.about = ["nothing"];
        this.filter = "All";
        this.show = true;
        this.loop = 0;
        this.gains = 0;
        this.status = "";
        this.totalGains = [];
        this.filteredExercises = [];
        this.platform.ready().then(function (readySource) {
            console.log("anything");
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
        });
    }
    ListMasterPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log(this.records._cardioRecs)
        console.log(this.userService.getUser().email);
        if (this.userService.getUser().username == "Currybde") {
            this.getLocalExercises().then(function (exercises) {
                exercises.forEach(function (exercise) {
                    var history = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref(_this.userService.getUser().username + "/exercisesNew//history");
                    history.push(exercise);
                });
            });
        }
        this.userService.getExercises().subscribe(function (exercises) {
            _this.exercises = exercises;
            _this.filteredExercises = exercises;
            _this.show = false;
        });
        // this.username = localStorage.getItem("username");
        // console.log(this.username);
        // this.lifts = {};
        // this.setlifts = {};
        // // Get user data status
        // 
        // this.getUsers().then((val) => {
        //   console.log("Slut");
        //   if (val != null) {
        //     this.users = val;
        //   }
        //   if (this.users.includes(this.username)) {
        //     this.status = this.username;
        //   }
        //   else {
        //     this.status = "cloud";
        //   }
        // }).then(() => {
        // 
        //   if (this.status == this.username) {
        //     this.getExercises().then((val) => {
        //       this.setlifts = val;
        //       this.lifts = this.setlifts;
        //       this.show = false;
        //       var exercises = firebase.database().ref('/' + this.username + '/exercises');
        //       exercises.set(this.setlifts);
        //     })
        //   } else {
        //     var query1 = firebase.database().ref('/' + this.username + '/exercises');
        //     query1.once("value").then( snapshot => {
        //       this.loop = 0;
        //       snapshot.forEach( childSnapshot => {
        // 
        //         this.loop++
        //         var childData1 = childSnapshot.val();
        //         var key = childSnapshot.key;
        // 
        //         this.setlifts[key] = childData1;
        //         this.lifts = this.setlifts
        // 
        //         if ( snapshot.numChildren() == this.loop ) {
        //           //alert("HERE")
        //           this.show = false;
        //           this.saveData();
        //         }
        //       });
        //     });  
        //   }
        // })
    };
    // saveData() {
    //   // Get user data status
    //   this.getUsers().then((val) => {
    //     if (val == null) {
    //       this.users.push(this.username);
    //     }
    //     else {
    //       this.users = val;
    //       this.users.push(this.username);
    //     }
    //     this.storage.set('/users', this.users);
    //     this.status = this.username;
    //   })
    // 
    //   this.storage.set(this.username + '/exercises', this.setlifts)
    //   this.storage.set(this.username + '/gains', this.totalGains)
    //   var queryGains = firebase.database().ref('/' + this.username + '/gains');
    // 
    //   queryGains.once("value").then( snapshot => {
    //     if (!snapshot) {
    //       //alert("nope")
    //     }
    //     this.loop = 0;
    //     this.gains = 0;
    //     snapshot.forEach( childSnapshot => {
    //       this.loop++
    //       var childData2 = childSnapshot.val();
    //       this.totalGains.push(childData2);
    //       if ( snapshot.numChildren() == this.loop ) {
    //         //alert("My Dear")
    //         this.storage.set(this.username + '/gains', this.totalGains)
    //       }
    //     })
    //   })
    // }
    ListMasterPage.prototype.getUsers = function () {
        console.log("at user method");
        console.log(JSON.stringify(this.storage.get('/users')));
        return this.storage.get('/users');
    };
    ListMasterPage.prototype.getLocalExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    ListMasterPage.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    // ionViewDidEnter() {
    // 
    //   this.ionViewDidLoad();
    //   this.getExercises().then((val) => {
    //     if (val != null) {
    //       this.setlifts = val;
    // 
    //     }
    //   })
    //   if (this.status == this.username) {
    //     this.getExercises().then((val) => {
    //       var exercises = firebase.database().ref(this.username + '/exercises');
    //       exercises.set(val);
    //     })
    //     this.getGains().then((val) => {
    //       var gains  = firebase.database().ref(this.username + '/gains');
    //       gains.set(val);
    //     })
    //   }
    // }
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        //this.navCtrl.push('ItemCreatePage');
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.ionViewDidLoad();
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.presentConfirm = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete?',
            message: 'Do you want to delete ' + item.name + ' from you exercises? You will keep the gains',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteItem(item);
                    }
                }
            ]
        });
        alert.present();
    };
    ListMasterPage.prototype.deleteItem = function (item) {
        var _this = this;
        this.userService.removeExercise(item.id).subscribe(function (data) {
            _this.ionViewDidLoad();
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (exercise) {
        //console.log(this.records._cardioRecs)
        if (exercise.MuscleGroup.muscleGroupName == 'Cardio') {
            this.navCtrl.push('CardioPage', {
                exercise: exercise
            });
        }
        else {
            this.navCtrl.push('ItemDetailPage', {
                exercise: exercise
            });
        }
    };
    ListMasterPage.prototype.filterExercises = function () {
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
    ListMasterPage.prototype.executeFilter = function () {
        var _this = this;
        this.filteredExercises = [];
        this.exercises.forEach(function (exercise) {
            if (exercise.MuscleGroup.muscleGroupName == _this.filter) {
                _this.filteredExercises.push(exercise);
            }
        });
        //alert(this.lifts["Bench Press-Barbell"].name)
        // Object.keys(this.setlifts).forEach( (key, index) => {
        //   if (this.setlifts[key].muscle == this.filter){
        //     this.lifts[key] = this.setlifts[key]
        //   }
        // });
    };
    ListMasterPage.prototype.editExercise = function (item) {
        this.navCtrl.push('ItemCreatePage', {
            exercise: item
        });
    };
    return ListMasterPage;
}());
ListMasterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exercises',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/exercises/exercises.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="filterExercises()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Exercises</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<pre>{{exercises | json}}</pre>\n<ion-content>\n  <ion-list>\n    <div id=\'reCont\'>\n      <button id="refresh" *ngIf="show" (click)="ionViewDidLoad()">Refresh\n      </button>\n    </div>\n    <ion-item-sliding *ngFor="let exercise of filteredExercises">\n      <button ion-item (click)="openItem(exercise)">\n        <!--<ion-avatar item-start>\n        </ion-avatar>-->\n\n        <h2 >{{exercise.exerciseName}}</h2>\n        <p>{{exercise.variation}}</p>\n      </button>\n        <!-- <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n       -->\n\n      <ion-item-options>\n        <button ion-button color="light"(click)="editExercise(exercise)">\n          {{ "Edit" }}\n        </button>\n        <button ion-button color="danger" (click)="presentConfirm(exercise)">\n          {{ \'DELETE_BUTTON\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/exercises/exercises.html"*/
    })
    //@Injectable()
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["h" /* User */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* Items */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["f" /* Records */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_exercise_exercise__["a" /* ExerciseProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */]])
], ListMasterPage);

//# sourceMappingURL=exercises.js.map

/***/ })

});
//# sourceMappingURL=12.js.map