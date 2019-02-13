import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-selectsearchsingle',
  templateUrl: 'selectsearchsingle.html',
})

export class SelectsearchsinglePage {

  titleText: string = "";
  searchText: string = "";
  items: any[];
  filterItems: any[];
  selectedItems: any[] = [];
  displayOk: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.items = this.navParams.get("data");
    this.titleText = this.navParams.get("titleText");
    this.FilterItems();
  }

  FilterItems() {
    this.filterItems = this.items;
    if (this.searchText.trim() !== '') {
      this.filterItems = this.filterItems.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
      });
    }
  }

  CheckChange(item: any) {
    for (let index = 0; index < this.filterItems.length; index++) {
      const element = this.filterItems[index];
      if (element.key == item.key) {
        this.filterItems[index].selected = true;
        this.selectedItems = element;
      }
      else {
        this.filterItems[index].selected = false;
      }
    }
  }

  CloseModel() {
    this.viewCtrl.dismiss(this.selectedItems);
  }
}