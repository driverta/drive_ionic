import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemDetailPage } from './exercise-detail';
import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { NewSetComponent } from '../../components/new-set/new-set';
import { HistoryComponent } from '../../components/history/history';
import { RecordsComponent } from '../../components/records/records';

@NgModule({
  declarations: [
    ItemDetailPage,
    BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
