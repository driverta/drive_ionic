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


@NgModule({
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
export class CardioPageModule { }
