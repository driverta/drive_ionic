import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RecordDetailPage } from './record-detail';

import { RecordsComponent } from '../../components/records/records';
import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RecordDetailPage,
    BarChartComponent,
    RecordsComponent
  ],
  imports: [
    IonicPageModule.forChild(RecordDetailPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class RecordDetailPageModule {}
