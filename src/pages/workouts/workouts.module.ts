import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutsPage } from './workouts';

@NgModule({
  declarations: [
    WorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutsPage),
  ],
})
export class WorkoutsPageModule {}
