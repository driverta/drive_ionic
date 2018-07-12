import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { GainsChartComponent } from '../../components/gains-chart/gains-chart';
import { ListMasterPage } from './exercises';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ListMasterPage,
    GainsChartComponent
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    PipesModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
