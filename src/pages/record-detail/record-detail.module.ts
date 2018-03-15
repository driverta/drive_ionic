import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RecordDetailPage } from './record-detail';

import { ProfileRecordsComponent } from '../../components/profile-records/profile-records';
import { ProfileBarComponent } from '../../components/profile-bar/profile-bar';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RecordDetailPage,
    ProfileBarComponent,
    ProfileRecordsComponent
  ],
  imports: [
    IonicPageModule.forChild(RecordDetailPage),
    TranslateModule.forChild(),
    PipesModule,
  ],
})
export class RecordDetailPageModule {}
