import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GainsPage } from './gains';

@NgModule({
  declarations: [
    GainsPage,
  ],
  imports: [
    IonicPageModule.forChild(GainsPage),
  ],
})
export class GainsPageModule {}
