webpackJsonp([26],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRecordsPageModule", function() { return CustomRecordsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_records__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomRecordsPageModule = (function () {
    function CustomRecordsPageModule() {
    }
    return CustomRecordsPageModule;
}());
CustomRecordsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__custom_records__["a" /* CustomRecordsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__custom_records__["a" /* CustomRecordsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__custom_records__["a" /* CustomRecordsPage */]
        ]
    })
], CustomRecordsPageModule);

//# sourceMappingURL=custom-records.module.js.map

/***/ }),

/***/ 742:
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
        selector: 'page-custom-records',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\custom-records\custom-records.html"*/'<!--\n\n  Generated template for the CustomRecordsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>Custom Records</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          Cancel\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="saveRecord();" strong>\n\n        <span color="primary" showWhen="ios">\n\n          Done\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div class="bigRec">\n\n		<p class="addRec">Add Record: <input [(ngModel)]="newRep" class="recText" type="text" value="11"><input (click)="addRecord();" type="submit" id="add" value="+"></p>\n\n		<br>\n\n		<table>\n\n			<tr>\n\n				<th>Reps</th>\n\n				<th></th>\n\n			</tr>\n\n			<tr *ngFor="let x of records._records">\n\n				<td >{{x.reps}}</td>\n\n				<td>\n\n					<input (click)="deleteRec(x);" type="button" value="X" class="remove">\n\n				</td>\n\n			</tr>\n\n		</table>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\custom-records\custom-records.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["e" /* Records */]])
], CustomRecordsPage);

//# sourceMappingURL=custom-records.js.map

/***/ })

});
//# sourceMappingURL=26.js.map