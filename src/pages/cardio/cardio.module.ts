import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CardioPage } from './cardio';
import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { NewCardioComponent } from '../../components/new-cardio/new-cardio';
import { HistoryComponent } from '../../components/history/history';
import { RecordsComponent } from '../../components/records/records';
import { LineChartComponent } from '../../components/line-chart/line-chart';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    CardioPage,
    BarChartComponent,
    NewCardioComponent,
    HistoryComponent,
    RecordsComponent,
    LineChartComponent
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
