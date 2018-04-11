import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardioRecordDetailPage } from './cardio-record-detail';

@NgModule({
  declarations: [
    CardioRecordDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CardioRecordDetailPage),
  ],
})
export class CardioRecordDetailPageModule {}
