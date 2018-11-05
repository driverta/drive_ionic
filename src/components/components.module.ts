import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { NewSetComponent } from './new-set/new-set';
import { HistoryComponent } from './history/history';
import { RecordsComponent } from './records/records';
import { LineChartComponent } from './line-chart/line-chart';
import { ProfileRecordsComponent } from './profile-records/profile-records';
import { ProfileBarComponent } from './profile-bar/profile-bar';
import { FriendProfileRecordsComponent } from './friend-profile-records/friend-profile-records';
import { FriendProfileBarComponent } from './friend-profile-bar/friend-profile-bar';
import { CardioProfileRecordsComponent } from './cardio-profile-records/cardio-profile-records';
import { CardioProfileBarComponent } from './cardio-profile-bar/cardio-profile-bar';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module'

// import { FriendCardioProfileBarComponent } from './friend-cardio-profile-bar/friend-cardio-profile-bar';
// import { FriendCardioProfileRecordsComponent } from './friend-cardio-profile-records/friend-cardio-profile-records';
import { GainsChartComponent } from './gains-chart/gains-chart';
import { TimelineChartComponent } from './timeline-chart/timeline-chart';
@NgModule({
	declarations: [BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent,
    LineChartComponent,
    ProfileRecordsComponent,
    ProfileBarComponent,
    FriendProfileRecordsComponent,
    FriendProfileBarComponent,
    CardioProfileRecordsComponent,
    CardioProfileBarComponent,
    GainsChartComponent,
    TimelineChartComponent],
	imports: [IonicModule,
        PipesModule
    ],
	exports: [BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent,
    LineChartComponent,
    ProfileRecordsComponent,
    ProfileBarComponent,
    FriendProfileRecordsComponent,
    FriendProfileBarComponent,
    CardioProfileRecordsComponent,
    CardioProfileBarComponent,
    GainsChartComponent,
    TimelineChartComponent]
})
export class ComponentsModule {}
