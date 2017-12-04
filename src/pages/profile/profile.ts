import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { Settings } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';

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

  xlevel = 1;
  xcurrent = 25;
  xtotal = 100;
  progress = 75;
  username = "test"
  rank = "frail body"
  loop = 0;
  gains = 0;
  records = 0;
  imageData: any;

  options: any;

  show: boolean = true;

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
    public translate: TranslateService,
    public camera: Camera,
    private user: User,
    public levels: Levels) {
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
      console.log(group.profilePic);
    });
  }

  ionViewDidLoad() {
    this.username = this.user._user
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      this.loop = 0;
      this.gains = 0;
      this.records = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData2 = childSnapshot.val();
        var gains = childData2.gains;
        this.gains = this.gains + gains
        if (gains == 10){
          this.records++;
        }
        if ( snapshot.numChildren() == this.loop )
          this.setLevel()
      })
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
    
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var imagesRef = storageRef.child(this.username);
    var spaceRef = storageRef.child(this.username + '/profilePic');
    /*
    spaceRef.put(this.imageData).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
    */

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
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
}
