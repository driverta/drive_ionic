import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomRecordsPage } from './custom-records';

@NgModule({
  declarations: [
    CustomRecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomRecordsPage),
  ],
  exports: [
  	CustomRecordsPage
  ]
})
export class CustomRecordsPageModule {}
