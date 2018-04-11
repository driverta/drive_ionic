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
import { Item } from '../../models/item';
var Items = /** @class */ (function () {
    function Items(http) {
        this.http = http;
        this.lifts = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var lifts = [
            {
                "name": "Bench Press",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Chest"
            },
            {
                "name": "Squat",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Legs"
            },
            {
                "name": "Deadlift",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Back"
            },
            {
                "name": "Shoulder Press",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Shoulders"
            },
            {
                "name": "Incline Flyes",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Chest"
            },
            {
                "name": "Leg Press",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Legs"
            },
            {
                "name": "Curls",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Arms"
            }
        ];
        for (var _i = 0, lifts_1 = lifts; _i < lifts_1.length; _i++) {
            var item = lifts_1[_i];
            this.lifts.push(new Item(item));
        }
        var username = "bob";
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.lifts;
        }
        return this.lifts.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.lifts.push(item);
    };
    Items.prototype.delete = function (item) {
        this.lifts.splice(this.lifts.indexOf(item), 1);
    };
    Items = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], Items);
    return Items;
}());
export { Items };
//# sourceMappingURL=items.js.map