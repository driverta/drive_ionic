import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordsPage } from './records';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordsPage),
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class RecordsPageModule {}
