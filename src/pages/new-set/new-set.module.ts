import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NewSetPage } from './new-set';

@NgModule({
  declarations: [
    NewSetPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSetPage),
    TranslateModule.forChild()
  ],
  exports: [
    NewSetPage
  ]
})
export class NewSetPageModule { }