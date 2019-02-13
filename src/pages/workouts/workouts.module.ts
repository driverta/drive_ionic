import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { WorkoutsPage } from './workouts';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    WorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutsPage),
    TranslateModule.forChild(),
    PipesModule,
    ComponentsModule
  ],
  exports: [
    WorkoutsPage
  ]
})
export class ListMasterPageModule { }
