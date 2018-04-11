import {Injectable} from '@angular/core';
// if you've gone with the local installation approach, you'd use the following:
import firebase from 'firebase';


@Injectable()
export class DataService {
	public db: any;
	init() {
		const config = {
	      apiKey: "AIzaSyCBYJ0--a38rC2Uhd28z5g3B449Kkz-fJE",
	      authDomain: "drive-cadf7.firebaseapp.com",
	      databaseURL: "https://drive-cadf7.firebaseio.com",
	      projectId: "drive-cadf7",
	      storageBucket: "drive-cadf7.appspot.com",
	      messagingSenderId: "564282992846"
	    };
	    firebase.initializeApp(config);
	}
}
