import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlePage } from './ble';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BlePage,
  ],
  imports: [
    IonicPageModule.forChild(BlePage),
  ],
})
export class BlePageModule {}
