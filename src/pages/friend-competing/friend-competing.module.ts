import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendCompetingPage } from './friend-competing';

@NgModule({
  declarations: [
    FriendCompetingPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendCompetingPage),
  ],
})
export class FriendCompetingPageModule {}
