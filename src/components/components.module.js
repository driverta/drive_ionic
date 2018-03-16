var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { NewSetComponent } from './new-set/new-set';
import { HistoryComponent } from './history/history';
import { RecordsComponent } from './records/records';
import { LineChartComponent } from './line-chart/line-chart';
import { NewCardioComponent } from './new-cardio/new-cardio';
import { CardioHistoryComponent } from './cardio-history/cardio-history';
import { CardioRecordsComponent } from './cardio-records/cardio-records';
import { CardioBarComponent } from './cardio-bar/cardio-bar';
import { CardioLineComponent } from './cardio-line/cardio-line';
import { ProfileRecordsComponent } from './profile-records/profile-records';
import { ProfileBarComponent } from './profile-bar/profile-bar';
import { FriendProfileRecordsComponent } from './friend-profile-records/friend-profile-records';
import { FriendProfileBarComponent } from './friend-profile-bar/friend-profile-bar';
import { CardioProfileRecordsComponent } from './cardio-profile-records/cardio-profile-records';
import { CardioProfileBarComponent } from './cardio-profile-bar/cardio-profile-bar';
import { FriendCardioProfileBarComponent } from './friend-cardio-profile-bar/friend-cardio-profile-bar';
import { FriendCardioProfileRecordsComponent } from './friend-cardio-profile-records/friend-cardio-profile-records';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [BarChartComponent,
                NewSetComponent,
                HistoryComponent,
                RecordsComponent,
                LineChartComponent,
                NewCardioComponent,
                CardioHistoryComponent,
                CardioRecordsComponent,
                CardioBarComponent,
                CardioLineComponent,
                ProfileRecordsComponent,
                ProfileBarComponent,
                FriendProfileRecordsComponent,
                FriendProfileBarComponent,
                CardioProfileRecordsComponent,
                CardioProfileBarComponent,
                FriendCardioProfileBarComponent,
                FriendCardioProfileRecordsComponent],
            imports: [],
            exports: [BarChartComponent,
                NewSetComponent,
                HistoryComponent,
                RecordsComponent,
                LineChartComponent,
                NewCardioComponent,
                CardioHistoryComponent,
                CardioRecordsComponent,
                CardioBarComponent,
                CardioLineComponent,
                ProfileRecordsComponent,
                ProfileBarComponent,
                FriendProfileRecordsComponent,
                FriendProfileBarComponent,
                CardioProfileRecordsComponent,
                CardioProfileBarComponent,
                FriendCardioProfileBarComponent,
                FriendCardioProfileRecordsComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map