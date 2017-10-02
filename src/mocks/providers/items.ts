import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  lifts: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let lifts = [
      {
        "name": "Bench Press",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Barbell."
      },
      {
        "name": "Squat",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Barbell"
      },
      {
        "name": "Deadlift",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Barbell"
      },
      {
        "name": "Shoulder Press",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Dumbbell"
      },
      {
        "name": "Incline Flyes",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Cables"
      },
      {
        "name": "Leg Press",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Machine"
      },
      {
        "name": "Curls",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Dumbbell"
      }
    ];

    for (let item of lifts) {
      this.lifts.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.lifts;
    }

    return this.lifts.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.lifts.push(item);
  }

  delete(item: Item) {
    this.lifts.splice(this.lifts.indexOf(item), 1);
  }
}
