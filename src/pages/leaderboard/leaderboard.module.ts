import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchPage } from './leaderboard';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild(),
    PipesModule
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule { }
