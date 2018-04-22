var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
// if you've gone with the local installation approach, you'd use the following:
import firebase from 'firebase';
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.init = function () {
        var config = {
            apiKey: "AIzaSyCBYJ0--a38rC2Uhd28z5g3B449Kkz-fJE",
            authDomain: "drive-cadf7.firebaseapp.com",
            databaseURL: "https://drive-cadf7.firebaseio.com",
            projectId: "drive-cadf7",
            storageBucket: "drive-cadf7.appspot.com",
            messagingSenderId: "564282992846"
        };
        firebase.initializeApp(config);
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=firebase.js.map