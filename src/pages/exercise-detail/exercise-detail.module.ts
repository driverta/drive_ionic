import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ItemDetailPage } from './exercise-detail';
import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { NewSetComponent } from '../../components/new-set/new-set';
import { HistoryComponent } from '../../components/history/history';
import { RecordsComponent } from '../../components/records/records';
import { LineChartComponent } from '../../components/line-chart/line-chart';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    ItemDetailPage
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild(),
    PipesModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    ComponentsModule
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
