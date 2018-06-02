import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FriendCardioRecordDetailPage } from './friend-cardio-record-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FriendCardioRecordDetailPage
  ],
  imports: [
    IonicPageModule.forChild(FriendCardioRecordDetailPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class FriendCardioRecordDetailPageModule {}
