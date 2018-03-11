import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RulesPage } from './rules';

@NgModule({
  declarations: [
    RulesPage,
  ],
  imports: [
    IonicPageModule.forChild(RulesPage),
  ],
})
export class RulesPageModule {}
