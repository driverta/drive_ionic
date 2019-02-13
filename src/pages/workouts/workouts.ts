import { Component, ViewChild } from '@angular/core';
import { 
  IonicPage,
  ModalController,
  NavController,
  ActionSheetController,
  AlertController,
  NavParams
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { ExerciseProvider } from '../../providers/exercise/exercise';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { UserModel } from '../../models/users';
import { Exercise } from '../../models/Exercise';

import { GainsChartComponent } from '../../components/gains-chart/gains-chart';
import { MuscleGroup } from '../../models/MuscleGroupModel';

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
//@Injectable()
export class WorkoutsPage {
  users = [];
  workouts = [{id: 2, userId: 2830, workoutName: "test"},{id: 2, userId: 2830, workoutName: "test2"}];

  constructor(
    public navCtrl: NavController,
    public items: Items,
    public records: Records,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public actShtCtrl: ActionSheetController,
    private storage: Storage,
    private platform: Platform,
    private exerciseService: ExerciseProvider,
    public navParams: NavParams,
    private userService: ProvidersUserProvider) {
    this.platform.ready().then((readySource) => {

      // Platform now ready, execute any required native code
    });
  }

  ionViewWillEnter(){
    
    this.ionViewDidLoad();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    
  }

  addWorkout() {
    //this.navCtrl.push('ItemCreatePage');
    // let addModal = this.modalCtrl.create('WorkoutCreatePage', {
    // });
    // addModal.onDidDismiss(item => {
    //   if (item) {
    //     this.ionViewDidLoad();
    //   }
    // })
    // addModal.present();
  }

  presentConfirm(item) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete ' + item.name + ' from you exercises? You will keep the gains',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteWorkout(item);
          }
        }
      ]
    });
    alert.present();
  }

  deleteWorkout(item) {
    // this.userService.removeExercise(item.id).subscribe(data =>
    //   {
    //   this.ionViewDidLoad();
    //   }
    // );

  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(exercise) {
    this.navCtrl.push('ItemDetailPage', {
      exercise: exercise,
    });
  }

  editWorkout(item){
    this.navCtrl.push('ItemCreatePage', {
      exercise: item
    });
  }
}
