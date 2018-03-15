import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FriendCardioRecordDetailPage } from './friend-cardio-record-detail';

import { FriendCardioProfileRecordsComponent } from '../../components/friend-cardio-profile-records/friend-cardio-profile-records';
import { FriendCardioProfileBarComponent } from '../../components/friend-cardio-profile-bar/friend-cardio-profile-bar';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FriendCardioRecordDetailPage,
    FriendCardioProfileRecordsComponent,
    FriendCardioProfileBarComponent
  ],
  imports: [
    IonicPageModule.forChild(FriendCardioRecordDetailPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class FriendCardioRecordDetailPageModule {}
