import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendGainsPage } from './friend-gains';

@NgModule({
  declarations: [
    FriendGainsPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendGainsPage),
  ],
})
export class FriendGainsPageModule {}
