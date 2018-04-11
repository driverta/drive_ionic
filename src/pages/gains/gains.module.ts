import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GainsPage } from './gains';
import { GainsChartComponent } from '../../components/gains-chart/gains-chart';

@NgModule({
  declarations: [
    GainsPage,
    GainsChartComponent
  ],
  imports: [
    IonicPageModule.forChild(GainsPage),
  ],
})
export class GainsPageModule {}
