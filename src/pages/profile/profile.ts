import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Records } from '../../providers/providers';
import { Camera } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Alert, IonicPage, ModalController, Nav, NavController, NavParams, Slides } from 'ionic-angular';
import { Exercise } from '../../models/Exercise';
import { Levels, Settings } from '../../providers/providers';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { AuthProvider } from '../../providers/auth/auth'
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

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
  progress = 25;
  username = ""
  rank = "Frail Body"
  weight = 0
  height = "0"
  gym = "gym"
  location = "location"
  loop = 0;
  gains = 0;
  records = 0;
  competing = 0;
  competitors = 0;
  competingList = [];
  competitorsList = [];
  realCompetitorsList = [];
  imageData: any;
  userData: any;
  options: any;
  profile_pic: any;
  exercisesLength = 0;
  user: any;
  checkUser: any;
  show: boolean = true;
  load: boolean = true;
  buttons: boolean = false;
  myPicture: boolean = true;
  friendPicture: boolean = false;
  profilePictureActive = false;
  segment = "stats";

  settingsReady = false;
  showDefaultProfilePicture = true;

  latestExercise: Exercise = new Exercise()

  form: FormGroup;

  @ViewChild(Slides) slides: Slides;

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
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    public camera: Camera,
    public levels: Levels,
    private userService: ProvidersUserProvider,
    private authProvider: AuthProvider) {

    // this.userData = this.userService.getUser();
    this.checkUser = this.navParams.get("item")
    //console.log(this.user)
  }

  _buildForm() {

    let group: any = {
      profilePic: ['default-img'],
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
      // console.log(group.profilePic);
    });
  }

  ionViewDidLoad() {
    if (this.checkUser == undefined){
      this.user = this.userService.getUser();
      this.username = this.user.username;
      this.buttons = true;
      this.myPicture = true;
      this.userService.getExercises().subscribe(exercises => {
        this.exercisesLength = exercises.length;
        // this.latestExercise = exercises.pop()
      });
    } else {
      this.user = this.checkUser;
      this.username = this.user.username;
      this.myPicture = false;
      this.friendPicture = true;
      this.userService.getCompetingUsersExercises(this.user.id).subscribe(exercises => {
        this.exercisesLength = exercises.length;
      });
    }

    this.competitorsList = [];
    this.form = this.formBuilder.group({});  

    this.userService.getTotalGains(this.user.id).subscribe(totalGains => {
      this.gains = totalGains;
      this.setLevel();
    });;

    this.userService.getCompetingUsers(this.user.id).subscribe(data => {
      this.competingList = data;
      this.competing = this.competingList.length;
    })

    this.userService.getCompetitors(this.user.id).subscribe(data => {
      this.competitorsList = data;
      //console.log(this.competitorsList);
      this.competitors = this.competitorsList.length;
    })

    this.userService.getProfilePic(this.user.username).subscribe(data => {
      this.form.patchValue({"profilePic": "data:image/jpeg;base64," + data});
      if (data != "NahNigga"){
        this.form.patchValue({"profilePic": "data:image/jpeg;base64," + data});
        this.show = true;
        this.showDefaultProfilePicture = false;
      }
    });
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints -1) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    })
  }

  getPicture() {
    this.load = true;
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        alert("here");
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
        this.show = true
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      this.imageData = (readerEvent.target as any).result;
      this.userService.uploadProfilePic(this.user.username, this.imageData).subscribe(data => {
        this.show = false;
        this.form.patchValue({ 'profilePic': this.imageData });
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    try {
      return 'url(' + this.form.controls['profilePic'].value + ')'
    }
    catch(err){

    }
  }

  noLoad(){
    this.load = false;
  }

  ionViewWillEnter() {
    //this.username = localStorage.getItem("username");
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
  logOut(){
    let alert = this.alertCtrl.create({
      title: 'Logout of ' + this.username + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.authProvider.logout().then(
              () => {
                this.navCtrl.push("FirstRunPage");
              },
              (error) => {
                this.presentLogoutError(error);
              }
            );
          }
        }
      ]
    });
    alert.present();
  }

  goToCompeting(){
    var listType = "competing";
    this.navCtrl.push('CompetingPage', {
      list: this.competingList,
      listType: listType,
      user: this.user
    });

  }

  goToCompetitors(){
    var listType = "competitors";
    this.navCtrl.push('CompetingPage', {
      list: this.competitorsList,
      listType: listType,
      user: this.user
    });
  }

  goToRecords(){
    this.navCtrl.push('RecordsPage', {
      user: this.user
    });
  }

  goToGains(){
    this.navCtrl.push('GainsPage', {
      user: this.user
    });
  }

  editProfile(){
    let addModal = this.modalCtrl.create('EditProfilePage');
    addModal.onDidDismiss(item => {
      this.userService.getOneUser(this.username).subscribe(data => {
        this.weight = data.weight;
        this.height = data.height;
        this.gym = data.gym;
        this.location = data.location;
      })
    })

    addModal.present();
  }

  presentLogoutError(error) {
    let firebaseError: Alert = this.alertCtrl.create({
      title: "Error",
      message: "Something went wrong logging out. Please try again.",
      buttons: ['Ok']
    });
    firebaseError.present();
  }
}
