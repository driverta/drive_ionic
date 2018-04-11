var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { FriendProfileBarComponent } from '../../components/friend-profile-bar/friend-profile-bar';
import firebase from 'firebase';
var FriendRecordDetailPage = /** @class */ (function () {
    function FriendRecordDetailPage(navCtrl, navParams, records, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = records;
        this.storage = storage;
        this.checkRec = false;
        this.exercise = navParams.get('item');
        this.username = navParams.get("username");
    }
    FriendRecordDetailPage.prototype.ionViewWillEnter = function () {
        this.records._records = [];
        this.records._chart = [];
        this.getRecords();
    };
    FriendRecordDetailPage.prototype.getRecords = function () {
        var _this = this;
        var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
        queryHistory.once("value").then(function (snapshot) {
            //alert("D")
            console.log(snapshot);
            snapshot.forEach(function (childSnapshot) {
                //alert("BRUH")
                var childData1 = childSnapshot.val();
                _this.checkRec = false;
                _this.records._records.forEach(function (value, index) {
                    if (childData1.reps == value.reps) {
                        _this.checkRec = true;
                        if (childData1.weight > value.weight) {
                            _this.records._records[index].weight = childData1.weight;
                            _this.records._records[index].oneRM = childData1.oneRM;
                            _this.records._records[index].records++;
                        }
                    }
                });
                if (_this.checkRec == false) {
                    _this.records._records.push({ reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: 1 });
                }
            });
        });
        this.barChart.makeChart();
    };
    __decorate([
        ViewChild(FriendProfileBarComponent),
        __metadata("design:type", FriendProfileBarComponent)
    ], FriendRecordDetailPage.prototype, "barChart", void 0);
    FriendRecordDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-friend-record-detail',
            templateUrl: 'friend-record-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Records,
            Storage])
    ], FriendRecordDetailPage);
    return FriendRecordDetailPage;
}());
export { FriendRecordDetailPage };
//# sourceMappingURL=friend-record-detail.js.map