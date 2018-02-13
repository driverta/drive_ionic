import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterPage } from './exercises';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ListMasterPage,
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
