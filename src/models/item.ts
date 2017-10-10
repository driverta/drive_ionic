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

export interface Employee {
    company: string,
    frequency: number
}

export const StatsBarChart: Employee[] = [
    {company: "Apple", frequency: 100000},
    {company: "IBM", frequency: 80000},
    {company: "HP", frequency: 20000},
    {company: "Facebook", frequency: 70000},
    {company: "TCS", frequency: 12000},
    {company: "Google", frequency: 110000},
    {company: "Wipro", frequency: 5000},
    {company: "EMC", frequency: 4000}
];
