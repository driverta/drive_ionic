var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { Records } from '../../providers/providers';
/**
 * Generated class for the CustomRecordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomRecordsPage = /** @class */ (function () {
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
        this.getData = Observable.create(function (observer) {
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
    CustomRecordsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-custom-records',
            templateUrl: 'custom-records.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            AlertController,
            Records])
    ], CustomRecordsPage);
    return CustomRecordsPage;
}());
export { CustomRecordsPage };
//# sourceMappingURL=custom-records.js.map