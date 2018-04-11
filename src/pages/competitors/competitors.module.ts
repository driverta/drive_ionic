import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitorsPage } from './competitors';

@NgModule({
  declarations: [
    CompetitorsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitorsPage),
  ],
})
export class CompetitorsPageModule {}
