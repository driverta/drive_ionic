import { NgModule } from '@angular/core';
import { SortByGainsPipe } from './sort-by-gains/sort-by-gains';
import { SortByRepsPipe } from './sort-by-reps/sort-by-reps';
@NgModule({
	declarations: [SortByGainsPipe,
    SortByRepsPipe],
	imports: [],
	exports: [SortByGainsPipe,
    SortByRepsPipe]
})
export class PipesModule {}
