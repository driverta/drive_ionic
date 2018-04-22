import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendRecordDetailPage } from './friend-record-detail';
import { TranslateModule } from '@ngx-translate/core';

import { FriendProfileRecordsComponent } from '../../components/friend-profile-records/friend-profile-records';
import { FriendProfileBarComponent } from '../../components/friend-profile-bar/friend-profile-bar';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FriendRecordDetailPage,
    FriendProfileRecordsComponent,
    FriendProfileBarComponent
  ],
  imports: [
    IonicPageModule.forChild(FriendRecordDetailPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class FriendRecordsPageModule {}
