var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FriendCardioRecordDetailPage } from './friend-cardio-record-detail';
import { FriendCardioProfileRecordsComponent } from '../../components/friend-cardio-profile-records/friend-cardio-profile-records';
import { FriendCardioProfileBarComponent } from '../../components/friend-cardio-profile-bar/friend-cardio-profile-bar';
import { PipesModule } from '../../pipes/pipes.module';
var FriendCardioRecordDetailPageModule = /** @class */ (function () {
    function FriendCardioRecordDetailPageModule() {
    }
    FriendCardioRecordDetailPageModule = __decorate([
        NgModule({
            declarations: [
                FriendCardioRecordDetailPage,
                FriendCardioProfileRecordsComponent,
                FriendCardioProfileBarComponent
            ],
            imports: [
                IonicPageModule.forChild(FriendCardioRecordDetailPage),
                TranslateModule.forChild(),
                PipesModule,
            ],
        })
    ], FriendCardioRecordDetailPageModule);
    return FriendCardioRecordDetailPageModule;
}());
export { FriendCardioRecordDetailPageModule };
//# sourceMappingURL=friend-cardio-record-detail.module.js.map