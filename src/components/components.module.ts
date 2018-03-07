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
    CardioLineComponent],
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
    CardioLineComponent]
})
export class ComponentsModule {}
