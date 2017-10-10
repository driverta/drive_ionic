import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemDetailPage } from './exercise-detail';
import { BarChartComponent } from '../../components/bar-chart/bar-chart';

@NgModule({
  declarations: [
    ItemDetailPage,
    BarChartComponent
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
