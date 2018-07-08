import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { CustomRecordsPage } from '../custom-records/custom-records';
import { Storage } from '@ionic/storage';

import firebase from 'firebase';

import { User, ProvidersUserProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { Exercise } from '../../models/Exercise';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { MuscleGroup } from '../../models/MuscleGroupModel';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  customPage = CustomRecordsPage;

  isReadyToSave: boolean;

  item: any;
  lifts = {};
  setlifts = {};
  myrecords: any
  exercise: { name: string, variation: string, muscle: string } = { name: "", variation: "", muscle: "Chest" };
  username = "test";
  bool = true;
  edit = false;
  data: any;
  liftBool = false;
  timeBool = true;
  milesBool = true;
  caloriesBool = false;
  lift = true;
  cardio = false;

  form: FormGroup;

  private mg: MuscleGroup[];

  private mgSelect: MuscleGroup;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    navParams: NavParams,
    private records: Records,
    public alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider,
    private exerciseService: ExerciseProvider) {

    this.data = navParams.get('exercise');
    console.log(this.data);
    if (this.data != null) {
      this.exercise.name = this.data.exerciseName;
      this.exercise.variation = this.data.variation;
      this.mgSelect = this.data.MuscleGroup;
      this.edit = true;
    }
    //this.setlifts = navParams.get('lifts');

    this.form = formBuilder.group({
      name: ['', Validators.required],
      variation: [''],
      muscle: MuscleGroup,
      lift: false,
      time: true,
      miles: true,
      calories: false,
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    //this.myrecords = navParams.get('records') || records._records;
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {

    this.exerciseService.getAllMuscleGroups().subscribe(data => {
      this.mg = data;
      console.log(this.mg)
    })

    // this.getExercises().then((val) => {
    //   console.log(val)
    //   this.setlifts = val;
    //   this.lifts = this.setlifts;
    //   console.log(this.lifts);
    // });

    // console.log(this.setlifts);
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  saveExercise() {
    this.bool = true;
    
    this.userService.getExercises().subscribe(exercises => {
      for (let exercise of exercises) {
        if (exercise.exerciseName == this.exercise.name
          && exercise.variation == this.exercise.variation
          && exercise.MuscleGroup.id == this.mgSelect.id) {
          this.presentAlert();
          this.bool = false;
        }
      }

      if (this.bool) {
        var newExercise = new Exercise;
        newExercise.exerciseName = this.exercise.name;
        newExercise.variation = this.exercise.variation;
        newExercise.MuscleGroup = this.mgSelect;
        this.exerciseService.createExercise(this.userService.getUser().id, newExercise).subscribe(data => {
          if(this.edit){
            this.userService.removeExercise(this.data.id).subscribe(data =>{
              
            })
          }
            this.done();
        })
      }
    })




    // if(this.bool){

      // if(this.edit){
      //   var oldKey = this.data.name + '-' + this.data.variation;
      //   delete this.lifts[oldKey];
      // }

    //   var key = this.exercise.name + '-' + this.exercise.variation

    //   this.lifts[key] = this.exercise

    //   this.storage.set(this.username + '/exercises', this.lifts).then(() =>{
    //     this.done();
    //   });

    // }
  }

  setMG(item1, item2){
    return item1 && item2 && (item1.id === item2.id)
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Duplicate Exercise',
      subTitle: 'You already have an exercise with this name and Variation',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  getExercises(): Promise<any> {
    this.storage.ready().then(() => {
      console.log(this.storage.get(this.username + '/exercises'))

    })
    return this.storage.get(this.username + '/exercises');

  }

  changeCheckbox(groupName) {
    if (groupName == "Cardio"){
      this.lift = false;
      this.cardio = true;
      this.timeBool = true;
      this.milesBool = true;
    } else if (groupName == "Flexibility"){
      this.lift = false;
      this.cardio = false;
    } else {
      this.lift = true;
      this.cardio = false;
    }
  }
}
