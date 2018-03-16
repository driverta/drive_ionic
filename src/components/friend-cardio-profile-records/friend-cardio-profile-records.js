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
import { NavParams } from 'ionic-angular';
import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';
import firebase from 'firebase';
var FriendCardioProfileRecordsComponent = /** @class */ (function () {
    function FriendCardioProfileRecordsComponent(navParams, user, records) {
        this.user = user;
        this.records = records;
        this.tempRec = [];
        this.loop = 0;
        this.rec = [];
        this.exercise = navParams.get('item');
        this.username = navParams.get("username");
        console.log(this.records._cardioRecords);
    }
    FriendCardioProfileRecordsComponent.prototype.makeTable = function () {
        alert("HI");
        this.tempRec = this.records._cardio;
        this.records._cardioRecords = [];
        this.rec = [];
        this.records._chart = [];
        this.getRecords();
    };
    FriendCardioProfileRecordsComponent.prototype.getRecords = function () {
        var _this = this;
        var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
        queryHistory.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                _this.tempRec.forEach(function (value, index) {
                    if (childData1.minutes >= value.min && childData1.minutes < value.max) {
                        //alert("in")
                        if (childData1.mph > value.mph) {
                            _this.tempRec[index].miles = childData1.miles;
                            _this.tempRec[index].time = childData1.time;
                            _this.tempRec[index].mph = childData1.mph;
                            _this.tempRec[index].records++;
                        }
                    }
                });
                if (snapshot.numChildren() == _this.loop) {
                    _this.tempRec.forEach(function (value) {
                        if (value.records > 0) {
                            _this.rec.push(value);
                            console.log(_this.rec);
                        }
                    });
                }
            });
        });
    };
    FriendCardioProfileRecordsComponent = __decorate([
        Component({
            selector: 'friend-cardio-profile-records',
            templateUrl: 'friend-cardio-profile-records.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            User,
            Records])
    ], FriendCardioProfileRecordsComponent);
    return FriendCardioProfileRecordsComponent;
}());
export { FriendCardioProfileRecordsComponent };
//# sourceMappingURL=friend-cardio-profile-records.js.map