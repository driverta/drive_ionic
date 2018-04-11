import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverPage } from './discover';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DiscoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverPage),
    PipesModule,
  ],
})
export class DiscoverPageModule {}
