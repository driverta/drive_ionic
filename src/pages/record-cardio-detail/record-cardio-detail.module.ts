import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RecordCardioDetailPage } from './record-cardio-detail';

import { CardioProfileRecordsComponent } from '../../components/cardio-profile-records/cardio-profile-records';
import { CardioProfileBarComponent } from '../../components/cardio-profile-bar/cardio-profile-bar';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RecordCardioDetailPage,
    CardioProfileRecordsComponent,
    CardioProfileBarComponent
  ],
  imports: [
    IonicPageModule.forChild(RecordCardioDetailPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class RecordCardioDetailPageModule {}
