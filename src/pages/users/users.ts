import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { UserModel } from '../../models/users';
 
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

		users: UserModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: ProvidersUserProvider) {
  }

  ionViewDidLoad() {

  	this.userService.getAllUsers().subscribe(data => {
  		this.users = data;
      console.log(data);
  	});

    console.log('ionViewDidLoad UsersPage');
  }

}
