import { NgModule } from '@angular/core';
import { SortByGainsPipe } from './sort-by-gains/sort-by-gains';
import { SortByRepsPipe } from './sort-by-reps/sort-by-reps';
import { KeysPipe } from './keys/keys';
import { SortByMinutesPipe } from './sort-by-minutes/sort-by-minutes';
@NgModule({
	declarations: [SortByGainsPipe,
    SortByRepsPipe,
    KeysPipe,
    SortByMinutesPipe],
	imports: [],
	exports: [SortByGainsPipe,
    SortByRepsPipe,
    KeysPipe,
    SortByMinutesPipe]
})
export class PipesModule {}
