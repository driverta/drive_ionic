import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BleDetailsPage } from './ble-details';

@NgModule({
  declarations: [
    BleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BleDetailsPage),
  ],
})
export class BleDetailsPageModule {}
