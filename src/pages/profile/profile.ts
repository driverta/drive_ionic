import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, Nav, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

import { Settings } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
//import { WelcomePage } from '../pages';

import firebase from 'firebase';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class SettingsPage {
  // Our local settings object
  @ViewChild('fileInput') fileInput;
  @ViewChild(Nav) nav: Nav;
  xlevel = 1;
  xcurrent = 25;
  xtotal = 100;
  progress = 75;
  username = "test"
  rank = "frail body"
  loop = 0;
  gains = 0;
  records = 0;
  competing = 0;
  competitors = 0;
  imageData: any;

  options: any;

  show: boolean = true;
  load: boolean = true;

  settingsReady = false;

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'Profile';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    public camera: Camera,
    private user: User,
    public levels: Levels,
    private storage: Storage) {
  }

  _buildForm() {

    let group: any = {
      profilePic: [''],
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
      var pic = firebase.database().ref('/users/' + this.username + '/profilePic');
      pic.set(this.form.controls['profilePic'].value);
      console.log(group.profilePic);
    });
  }

  ionViewDidLoad() {
    this.username = this.username = localStorage.getItem("username");
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    /*
    var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      this.loop = 0;
      this.gains = 0;
      this.records = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData1 = childSnapshot.val();
        var gains = childData1.gains;
        this.gains = this.gains + gains
        if (gains == 10){
          this.records++;
        }
        if ( snapshot.numChildren() == this.loop )
          this.setLevel()
      })
    })
    */

    this.gains = 0;
    this.records = 0;
    this.storage.get(this.username + '/gains').then((val) => {
      //console.log('Your json is', val);
      if (val) {
        val.forEach ( (value) => {
          this.gains = this.gains + value.gains;
          if (value.gains == 10){
            this.records++;
          }
        })
      }
    }).then(() => {
      this.setLevel();
    })

    var queryCompeting = firebase.database().ref('/' + this.username + '/competing');
    queryCompeting.once("value").then( snapshot => {
      this.competing = 0;
      snapshot.forEach( childSnapshot => {
        this.competing++
      })
    })

    var queryCompetitors = firebase.database().ref('/' + this.username + '/competitors');
    queryCompetitors.once("value").then( snapshot => {
      this.competitors = 0;
      snapshot.forEach( childSnapshot => {
        this.competitors++
      })
    })

    var queryPic = firebase.database().ref('users/' + this.username + '/profilePic');
    queryPic.once("value").then( snapshot => {
      var pic = snapshot.val();
      if(pic){
        this.form.patchValue({ 'profilePic': pic });
        this.show = false;
      }
      //alert(this.form.controls['profilePic'].value)
    })
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    });
    
  }

  getPicture() {
    this.load = true;
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });

      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }



  }

  processWebImage(event) {
    //alert(event);
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      this.imageData = (readerEvent.target as any).result;
      this.show = false;
      this.form.patchValue({ 'profilePic': this.imageData });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {

    try {
      //this.noLoad();
      return 'url(' + this.form.controls['profilePic'].value + ')'
    }
    catch(err){

    }
    finally{
      
    }
    
  }

  noLoad(){
    this.load = false;
  }

  ionViewWillEnter() {

    this.ionViewDidLoad();
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
    
    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  logOut(){
    let alert = this.alertCtrl.create({
      title: 'Logout of ' + this.username + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.reallyLogOut();
          }
        }
      ]
    });
    alert.present();
  }

  reallyLogOut(){
    localStorage.setItem("stay","out");
    localStorage.setItem("email","");
    localStorage.setItem("status","bad");
    window.location.reload();
    this.navCtrl.push("FirstRunPage");
  }
}
