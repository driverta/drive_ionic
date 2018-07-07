import { NgModule } from '@angular/core';
import { SortByGainsPipe } from './sort-by-gains/sort-by-gains';
import { SortByRepsPipe } from './sort-by-reps/sort-by-reps';
import { KeysPipe } from './keys/keys';
import { SortByMinutesPipe } from './sort-by-minutes/sort-by-minutes';
import { CardioTimeConvertPipe } from './cardio-time-convert/cardio-time-convert';
@NgModule({
	declarations: [SortByGainsPipe,
    SortByRepsPipe,
    KeysPipe,
    SortByMinutesPipe,
    CardioTimeConvertPipe],
	imports: [],
	exports: [SortByGainsPipe,
    SortByRepsPipe,
    KeysPipe,
    SortByMinutesPipe,
    CardioTimeConvertPipe]
})
export class PipesModule {}
