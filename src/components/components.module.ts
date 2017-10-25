import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { NewSetComponent } from './new-set/new-set';
import { HistoryComponent } from './history/history';
import { RecordsComponent } from './records/records';
@NgModule({
	declarations: [BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent],
	imports: [],
	exports: [BarChartComponent,
    NewSetComponent,
    HistoryComponent,
    RecordsComponent]
})
export class ComponentsModule {}
