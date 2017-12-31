import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCompetitorsPage } from './search';

@NgModule({
  declarations: [
    AddCompetitorsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCompetitorsPage),
  ],
})
export class SearchPageModule {}
