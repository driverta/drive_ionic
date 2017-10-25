/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Item {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}

export interface Record {
    reps: number,
    oneRM: number
}

export interface Set {
    date: string,
    oneRM: number
}

export const StatsBarChart: Record[] = [
    {reps: 1, oneRM: 315},
    {reps: 2, oneRM: 300},
    {reps: 3, oneRM: 275},
    {reps: 4, oneRM: 225},
    {reps: 5, oneRM: 330},
    {reps: 6, oneRM: 225},
    {reps: 7, oneRM: 315},
    {reps: 8, oneRM: 300},
    {reps: 10, oneRM: 275},
    {reps: 12, oneRM: 305},
    {reps: 15, oneRM: 285}
];

export const StatsLineChart: Set[] = [
    {date: "9-20", oneRM: 315},
    {date: "9-20", oneRM: 300},
    {date: "9-26", oneRM: 275},
    {date: "9-26", oneRM: 225},
    {date: "9-26", oneRM: 330},
    {date: "10-2", oneRM: 225},
    {date: "10-2", oneRM: 315},
    {date: "10-9", oneRM: 300},
    {date: "10-9", oneRM: 275},
    {date: "10-15", oneRM: 305},
    {date: "10-15", oneRM: 285}
];
