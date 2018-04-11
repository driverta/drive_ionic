var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CardioPage } from './cardio';
import { CardioBarComponent } from '../../components/cardio-bar/cardio-bar';
import { NewCardioComponent } from '../../components/new-cardio/new-cardio';
import { CardioHistoryComponent } from '../../components/cardio-history/cardio-history';
import { CardioRecordsComponent } from '../../components/cardio-records/cardio-records';
import { CardioLineComponent } from '../../components/cardio-line/cardio-line';
import { PipesModule } from '../../pipes/pipes.module';
var CardioPageModule = /** @class */ (function () {
    function CardioPageModule() {
    }
    CardioPageModule = __decorate([
        NgModule({
            declarations: [
                CardioPage,
                CardioBarComponent,
                NewCardioComponent,
                CardioHistoryComponent,
                CardioRecordsComponent,
                CardioLineComponent
            ],
            imports: [
                IonicPageModule.forChild(CardioPage),
                TranslateModule.forChild(),
                PipesModule
            ],
            exports: [
                CardioPage
            ]
        })
    ], CardioPageModule);
    return CardioPageModule;
}());
export { CardioPageModule };
//# sourceMappingURL=cardio.module.js.map