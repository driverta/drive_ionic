var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendRecordDetailPage } from './friend-record-detail';
import { TranslateModule } from '@ngx-translate/core';
import { FriendProfileRecordsComponent } from '../../components/friend-profile-records/friend-profile-records';
import { FriendProfileBarComponent } from '../../components/friend-profile-bar/friend-profile-bar';
import { PipesModule } from '../../pipes/pipes.module';
var FriendRecordsPageModule = /** @class */ (function () {
    function FriendRecordsPageModule() {
    }
    FriendRecordsPageModule = __decorate([
        NgModule({
            declarations: [
                FriendRecordDetailPage,
                FriendProfileRecordsComponent,
                FriendProfileBarComponent
            ],
            imports: [
                IonicPageModule.forChild(FriendRecordDetailPage),
                TranslateModule.forChild(),
                PipesModule,
            ],
        })
    ], FriendRecordsPageModule);
    return FriendRecordsPageModule;
}());
export { FriendRecordsPageModule };
//# sourceMappingURL=friend-record-detail.module.js.map