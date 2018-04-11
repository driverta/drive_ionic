var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RecordCardioDetailPage } from './record-cardio-detail';
import { CardioProfileRecordsComponent } from '../../components/cardio-profile-records/cardio-profile-records';
import { CardioProfileBarComponent } from '../../components/cardio-profile-bar/cardio-profile-bar';
import { PipesModule } from '../../pipes/pipes.module';
var RecordCardioDetailPageModule = /** @class */ (function () {
    function RecordCardioDetailPageModule() {
    }
    RecordCardioDetailPageModule = __decorate([
        NgModule({
            declarations: [
                RecordCardioDetailPage,
                CardioProfileRecordsComponent,
                CardioProfileBarComponent
            ],
            imports: [
                IonicPageModule.forChild(RecordCardioDetailPage),
                TranslateModule.forChild(),
                PipesModule,
            ],
        })
    ], RecordCardioDetailPageModule);
    return RecordCardioDetailPageModule;
}());
export { RecordCardioDetailPageModule };
//# sourceMappingURL=record-cardio-detail.module.js.map