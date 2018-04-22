var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SortByGainsPipe } from './sort-by-gains/sort-by-gains';
import { SortByRepsPipe } from './sort-by-reps/sort-by-reps';
import { KeysPipe } from './keys/keys';
import { SortByMinutesPipe } from './sort-by-minutes/sort-by-minutes';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        NgModule({
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
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map