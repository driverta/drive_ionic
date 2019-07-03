import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedalsPage } from './medals';

@NgModule({
  declarations: [
    MedalsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedalsPage),
  ],
})
export class MedalsPageModule {}
