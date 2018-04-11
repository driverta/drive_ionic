/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());
export { Item };
export var StatsBarChart = [
    { reps: 1, oneRM: 315 },
    { reps: 2, oneRM: 300 },
    { reps: 3, oneRM: 275 },
    { reps: 4, oneRM: 225 },
    { reps: 5, oneRM: 330 },
    { reps: 6, oneRM: 225 },
    { reps: 7, oneRM: 315 },
    { reps: 8, oneRM: 300 },
    { reps: 10, oneRM: 275 },
    { reps: 12, oneRM: 305 },
    { reps: 15, oneRM: 285 }
];
export var StatsLineChart = [
    { date: "9-20", reps: 1, weight: 315, oneRM: 315 },
    { date: "9-21", reps: 10, weight: 215, oneRM: 300 },
    { date: "9-26", reps: 5, weight: 235, oneRM: 275 },
    { date: "9-27", reps: 3, weight: 205, oneRM: 225 },
    { date: "9-28", reps: 2, weight: 320, oneRM: 330 },
    { date: "10-2", reps: 5, weight: 185, oneRM: 225 },
    { date: "10-3", reps: 16, weight: 275, oneRM: 315 },
    { date: "10-9", reps: 1, weight: 300, oneRM: 300 },
    { date: "10-10", reps: 1, weight: 275, oneRM: 275 },
    { date: "10-15", reps: 4, weight: 285, oneRM: 305 },
    { date: "10-16", reps: 1, weight: 385, oneRM: 285 }
];
//# sourceMappingURL=item.js.map