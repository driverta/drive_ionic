import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GainsPage } from './gains';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    GainsPage,
  ],
  imports: [
    IonicPageModule.forChild(GainsPage),
    ComponentsModule,
    PipesModule
  ],
})
export class GainsPageModule {}
