webpackJsonp([13],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCreatePageModule", function() { return ItemCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_create__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemCreatePageModule = (function () {
    function ItemCreatePageModule() {
    }
    return ItemCreatePageModule;
}());
ItemCreatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]
        ]
    })
], ItemCreatePageModule);

//# sourceMappingURL=item-create.module.js.map

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

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CustomRecordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomRecordsPage = (function () {
    function CustomRecordsPage(navCtrl, navParams, viewCtrl, alertCtrl, records) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.records = records;
        //newRecord = {reps: 11, weight: 0, oneRM: 0, records: 0};
        this.newRep = 11;
        this.sameRecord = false;
        this.getDataObserver = null;
        this.getData = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.getDataObserver = observer;
        });
    }
    CustomRecordsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomRecordsPage');
    };
    CustomRecordsPage.prototype.tooManyAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'You can only track 10 Records!',
            buttons: ['Ok']
        });
        alert.present();
    };
    CustomRecordsPage.prototype.duplicateAlert = function () {
        var alert2 = this.alertCtrl.create({
            title: 'You are already tracking this Record!',
            buttons: ['Ok']
        });
        alert2.present();
    };
    CustomRecordsPage.prototype.notEnoughAlert = function () {
        var alert3 = this.alertCtrl.create({
            title: 'You need to track 10 Records!',
            buttons: ['Ok']
        });
        alert3.present();
    };
    CustomRecordsPage.prototype.deleteRec = function (x) {
        var _this = this;
        this.records._records.forEach(function (value, index) {
            if (value.reps == x.reps) {
                _this.records._records.splice(index, 1);
            }
        });
    };
    CustomRecordsPage.prototype.addRecord = function () {
        var _this = this;
        this.records._records.forEach(function (value, index) {
            if (value.reps == _this.newRep) {
                _this.sameRecord = true;
            }
        });
        if (this.records._records.length == 10) {
            this.tooManyAlert();
        }
        else if (this.sameRecord) {
            this.duplicateAlert();
        }
        else {
            //alert(newRep);
            var n = { reps: this.newRep, weight: 0, oneRM: 0, records: 0 };
            this.records._records.push(n);
        }
        this.records._records = this.records._records.sort(function (a, b) { return a.reps - b.reps; });
        this.sameRecord = false;
    };
    CustomRecordsPage.prototype.saveRecord = function () {
        if (this.records._records.length == 10) {
            this.viewCtrl.dismiss();
        }
        else {
            this.notEnoughAlert();
        }
    };
    CustomRecordsPage.prototype.cancel = function () {
        this.records._records = [
            { reps: 1, weight: 0, oneRM: 0, records: 0 },
            { reps: 2, weight: 0, oneRM: 0, records: 0 },
            { reps: 3, weight: 0, oneRM: 0, records: 0 },
            { reps: 4, weight: 0, oneRM: 0, records: 0 },
            { reps: 5, weight: 0, oneRM: 0, records: 0 },
            { reps: 6, weight: 0, oneRM: 0, records: 0 },
            { reps: 8, weight: 0, oneRM: 0, records: 0 },
            { reps: 10, weight: 0, oneRM: 0, records: 0 },
            { reps: 12, weight: 0, oneRM: 0, records: 0 },
            { reps: 15, weight: 0, oneRM: 0, records: 0 }
        ];
        this.viewCtrl.dismiss();
    };
    return CustomRecordsPage;
}());
CustomRecordsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-custom-records',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/custom-records/custom-records.html"*/'<!--\n  Generated template for the CustomRecordsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Custom Records</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          Cancel\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="saveRecord();" strong>\n        <span color="primary" showWhen="ios">\n          Done\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="bigRec">\n		<p class="addRec">Add Record: <input [(ngModel)]="newRep" class="recText" type="text" value="11"><input (click)="addRecord();" type="submit" id="add" value="+"></p>\n		<br>\n		<table>\n			<tr>\n				<th>Reps</th>\n				<th></th>\n			</tr>\n			<tr *ngFor="let x of records._records">\n				<td >{{x.reps}}</td>\n				<td>\n					<input (click)="deleteRec(x);" type="button" value="X" class="remove">\n				</td>\n			</tr>\n		</table>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/custom-records/custom-records.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["f" /* Records */]])
], CustomRecordsPage);

//# sourceMappingURL=custom-records.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_records_custom_records__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Exercise__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_exercise_exercise__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_MuscleGroupModel__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, user, viewCtrl, formBuilder, camera, navParams, records, alertCtrl, storage, userService, exerciseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.records = records;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.userService = userService;
        this.exerciseService = exerciseService;
        this.customPage = __WEBPACK_IMPORTED_MODULE_4__custom_records_custom_records__["a" /* CustomRecordsPage */];
        this.lifts = {};
        this.setlifts = {};
        this.exercise = { name: "", variation: "", muscle: "Chest" };
        this.username = "test";
        this.bool = true;
        this.edit = false;
        this.data = navParams.get('exercise');
        console.log(this.data);
        if (this.data != null) {
            this.exercise.name = this.data.exerciseName;
            this.exercise.variation = this.data.variation;
            this.mgSelect = this.data.MuscleGroup;
            this.edit = true;
        }
        //this.setlifts = navParams.get('lifts');
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            variation: [''],
            muscle: __WEBPACK_IMPORTED_MODULE_9__models_MuscleGroupModel__["a" /* MuscleGroup */]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        //this.myrecords = navParams.get('records') || records._records;
    }
    ItemCreatePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ItemCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.exerciseService.getAllMuscleGroups().subscribe(function (data) {
            _this.mg = data;
            console.log(_this.mg);
        });
        // this.getExercises().then((val) => {
        //   console.log(val)
        //   this.setlifts = val;
        //   this.lifts = this.setlifts;
        //   console.log(this.lifts);
        // });
        // console.log(this.setlifts);
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    ItemCreatePage.prototype.saveExercise = function () {
        var _this = this;
        this.bool = true;
        this.userService.getExercises().subscribe(function (exercises) {
            for (var _i = 0, exercises_1 = exercises; _i < exercises_1.length; _i++) {
                var exercise = exercises_1[_i];
                if (exercise.exerciseName == _this.exercise.name
                    && exercise.variation == _this.exercise.variation
                    && exercise.MuscleGroup.id == _this.mgSelect.id) {
                    _this.presentAlert();
                    _this.bool = false;
                }
            }
            if (_this.bool) {
                var newExercise = new __WEBPACK_IMPORTED_MODULE_7__models_Exercise__["a" /* Exercise */];
                newExercise.exerciseName = _this.exercise.name;
                newExercise.variation = _this.exercise.variation;
                newExercise.MuscleGroup = _this.mgSelect;
                _this.exerciseService.createExercise(_this.userService.getUser().id, newExercise).subscribe(function (data) {
                    if (_this.edit) {
                        _this.userService.removeExercise(_this.data.id).subscribe(function (data) {
                        });
                    }
                    _this.done();
                });
            }
        });
        // if(this.bool){
        // if(this.edit){
        //   var oldKey = this.data.name + '-' + this.data.variation;
        //   delete this.lifts[oldKey];
        // }
        //   var key = this.exercise.name + '-' + this.exercise.variation
        //   this.lifts[key] = this.exercise
        //   this.storage.set(this.username + '/exercises', this.lifts).then(() =>{
        //     this.done();
        //   });
        // }
    };
    ItemCreatePage.prototype.setMG = function (item1, item2) {
        return item1 && item2 && (item1.id === item2.id);
    };
    ItemCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Duplicate Exercise',
            subTitle: 'You already have an exercise with this name and Variation',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ItemCreatePage.prototype.getExercises = function () {
        var _this = this;
        this.storage.ready().then(function () {
            console.log(_this.storage.get(_this.username + '/exercises'));
        });
        return this.storage.get(this.username + '/exercises');
    };
    return ItemCreatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], ItemCreatePage.prototype, "fileInput", void 0);
ItemCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-create',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/exercise-create/item-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>New Exercise</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="saveExercise();" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <ion-list>\n      <ion-item no-lines>Name:</ion-item>\n      <ion-item>\n        <ion-input type="text" required [(ngModel)]="exercise.name" placeholder="{{ \'E.g. Shoulder Press\' | translate }}" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item no-lines>Variation:</ion-item>\n      <ion-item>\n        <ion-input type="text" required [(ngModel)]="exercise.variation" placeholder="{{ \'E.g. Dumbbell\' | translate }}" formControlName="variation"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-select  [compareWith]="setMG" required [(ngModel)] = "mgSelect" [ngModelOptions]="{standalone: true}">\n          <ion-label>Muscle Group:</ion-label>\n          <ion-option *ngFor="let group of mg"  [value]="group">{{group.muscleGroupName}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/exercise-create/item-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["h" /* User */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["f" /* Records */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["e" /* ProvidersUserProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_exercise_exercise__["a" /* ExerciseProvider */]])
], ItemCreatePage);

//# sourceMappingURL=item-create.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuscleGroup; });
var MuscleGroup = (function () {
    function MuscleGroup() {
    }
    return MuscleGroup;
}());

//# sourceMappingURL=MuscleGroupModel.js.map

/***/ })

});
//# sourceMappingURL=13.js.map