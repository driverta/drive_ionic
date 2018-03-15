import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { NewSetComponent } from './new-set/new-set';
import { HistoryComponent } from './history/history';
import { RecordsComponent } from './records/records';
import { LineChartComponent } from './line-chart/line-chart';
import { NewCardioComponent } from './new-cardio/new-cardio';
import { CardioHistoryComponent } from './cardio-history/cardio-history';
import { CardioRecordsComponent } from './cardio-records/cardio-records';
import { CardioBarComponent } from './cardio-bar/cardio-bar';
import { CardioLineComponent } from './cardio-line/cardio-line';
import { ProfileRecordsComponent } from './profile-records/profile-records';
import { ProfileBarComponent } from './profile-bar/profile-bar';
import { FriendProfileRecordsComponent } from './friend-profile-records/friend-profile-records';
import { FriendProfileBarComponent } from './friend-profile-bar/friend-profile-bar';
import { CardioProfileRecordsComponent } from './cardio-profile-records/cardio-profile-records';
import { CardioProfileBarComponent } from './cardio-profile-bar/cardio-profile-bar';
import { FriendCardioProfileBarComponent } from './friend-cardio-profile-bar/friend-cardio-profile-bar';
import { FriendCardioProfileRecordsComponent } from './friend-cardio-profile-records/friend-cardio-profile-records';
@NgModule({
	declarations: [BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent,
    LineChartComponent,
    NewCardioComponent,
    CardioHistoryComponent,
    CardioRecordsComponent,
    CardioBarComponent,
    CardioLineComponent,
    ProfileRecordsComponent,
    ProfileBarComponent,
    FriendProfileRecordsComponent,
    FriendProfileBarComponent,
    CardioProfileRecordsComponent,
    CardioProfileBarComponent,
    FriendCardioProfileBarComponent,
    FriendCardioProfileRecordsComponent],
	imports: [],
	exports: [BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent,
    LineChartComponent,
    NewCardioComponent,
    CardioHistoryComponent,
    CardioRecordsComponent,
    CardioBarComponent,
    CardioLineComponent,
    ProfileRecordsComponent,
    ProfileBarComponent,
    FriendProfileRecordsComponent,
    FriendProfileBarComponent,
    CardioProfileRecordsComponent,
    CardioProfileBarComponent,
    FriendCardioProfileBarComponent,
    FriendCardioProfileRecordsComponent]
})
export class ComponentsModule {}
