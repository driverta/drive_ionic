import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { ExercisesPage } from './exercises';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ExercisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercisesPage),
    TranslateModule.forChild(),
    PipesModule,
    ComponentsModule
  ],
  exports: [
    ExercisesPage
  ]
})
export class ExercisesModulePage { }
