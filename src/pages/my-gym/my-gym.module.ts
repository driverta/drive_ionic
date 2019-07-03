import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGymPage } from './my-gym';

@NgModule({
  declarations: [
    MyGymPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGymPage),
  ],
})
export class MyGymPageModule {}
