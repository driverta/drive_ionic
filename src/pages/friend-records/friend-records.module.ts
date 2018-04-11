import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FriendRecordsPage } from './friend-records';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FriendRecordsPage
  ],
  imports: [
    IonicPageModule.forChild(FriendRecordsPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class FriendRecordsPageModule {}
