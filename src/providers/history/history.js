var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistoryProvider = /** @class */ (function () {
    function HistoryProvider(http) {
        this.http = http;
        this._history = [{ date: new Date(0), reps: 0, weight: 0, oneRM: 0 }];
        this._charts = [{ date: new Date(0), reps: 0, weight: 0, oneRM: 0 }];
        this._cardio = [{ date: new Date(0), miles: 0, time: 0, mph: 0 }];
        this._cardioCharts = [{ date: new Date(0), miles: 0, time: 0, mph: 0 }];
    }
    HistoryProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HistoryProvider);
    return HistoryProvider;
}());
export { HistoryProvider };
//# sourceMappingURL=history.js.map