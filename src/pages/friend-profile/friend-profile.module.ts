import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendProfilePage } from './friend-profile';

@NgModule({
  declarations: [
    FriendProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(FriendProfilePage),
  ],
})
export class FriendProfilePageModule {}
