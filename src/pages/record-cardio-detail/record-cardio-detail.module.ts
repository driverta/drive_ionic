import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordCardioDetailPage } from './record-cardio-detail';

@NgModule({
  declarations: [
    RecordCardioDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordCardioDetailPage),
  ],
})
export class RecordCardioDetailPageModule {}
