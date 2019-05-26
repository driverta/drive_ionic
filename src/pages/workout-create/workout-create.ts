import { Component, ViewChild, ElementRef } from '@angular/core';
import { 
  IonicPage,
  ModalController,
  NavController,
  ActionSheetController,
  AlertController,
  NavParams,
  ViewController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform, Content } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { ExerciseProvider } from '../../providers/exercise/exercise';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DragulaService } from 'ng2-dragula';

import { VirtualScroll } from 'ionic-angular';
import { Exercise } from '../../models/Exercise';
import { MuscleGroup } from '../../models/MuscleGroupModel';

@IonicPage()
@Component({
  selector: 'page-workout-create',
  templateUrl: 'workout-create.html'
})
//@Injectable()
export class WorkoutCreatePage {
  users = [];
  workoutExercises = [];

  screenHeight: any;
  itemExpandHeight: number = 100;
  items: any = [];

  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  @ViewChild('workoutExerciseList') workoutExerciseList: ElementRef;

  submitAttempt: boolean = false;

  exercises = [];
  constructor(
    public navCtrl: NavController,
    public records: Records,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public actShtCtrl: ActionSheetController,
    private storage: Storage,
    private platform: Platform,
    private viewCtrl: ViewController,
    public navParams: NavParams,
    private userService: ProvidersUserProvider,
    public formBuilder: FormBuilder) {
    this.platform.ready().then((readySource) => {
      this.signupSlider.onlyExternal = true;
      this.workoutExerciseList.nativeElement.style.height = this.platform.height() - 200 + 'px';
      // Platform now ready, execute any required native code
      this.userService.getExercises().subscribe(exercises => {
        this.exercises = exercises;
        console.log(exercises);
      });

      this.slideOneForm = formBuilder.group({
          exercises: []
      });
    });
  }

    OpenSelect() {
      let data = [];
      for (let index = 0; index < this.exercises.length; index++) {
              const element = this.exercises[index];
              data.push({ name: element.exerciseName, key: element.id });
      }
      let modal = this.modalCtrl.create('SelectsearchsinglePage', { data: data, titleText: "Please Select An Exercise" });
      modal.onDidDismiss((data) => {
          if (data.length != 0) {
            let exercise = this.exercises.filter(x => x.exerciseName === data.name)[0];
            // exercise.superSet = new Exercise();
            // exercise.superSet.MuscleGroup = new MuscleGroup();
            exercise.expanded = false;
            this.workoutExercises.push(exercise);
          }
      });
      modal.present();
    }


  ionViewWillEnter(){
    
    this.ionViewDidLoad();
  }

  next(){
    this.signupSlider.slideNext();
  }

  prev(){
      this.signupSlider.slidePrev();
  }
  
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    
  }

  addSuperSet(exercise) {
    let data = [];
      for (let index = 0; index < this.exercises.length; index++) {
              const element = this.exercises[index];
              data.push({ name: element.exerciseName, key: element.id });
      }
    let modal = this.modalCtrl.create('SelectsearchsinglePage', { data: data, titleText: "Please Select An Exercise" });
    modal.onDidDismiss((data) => {
        if (data.length != 0) {
          exercise.superSet = this.exercises.filter(x => x.exerciseName === data.name)[0];
          // let exercise = this.exercises.filter(x => x.exerciseName === data.name)[0];
          // this.workoutExercises.push(exercise);
        }
    });
    modal.present();
  }

  expandItem(item){
    console.log(item);
    this.workoutExercises.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });
  }
}
