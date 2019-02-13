import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { WorkoutCreatePage } from './workout-create';
import { PipesModule } from '../../pipes/pipes.module';
import {DragulaModule , DragulaService} from "ng2-dragula"
@NgModule({
  declarations: [
    WorkoutCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutCreatePage),
    TranslateModule.forChild(),
    PipesModule,
    ComponentsModule,
    DragulaModule
  ],
  exports: [
    WorkoutCreatePage
  ]
})
export class WorkoutCreatePageModule { }
