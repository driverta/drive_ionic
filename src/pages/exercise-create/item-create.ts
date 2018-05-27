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
import { MuscleGroup} from '../../models/MuscleGroupModel';

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
  exercise: { name: string, variation: string, muscle: string} = {name: "", variation: "", muscle: "Chest"};
  username = "test";
  bool = true;
  edit = false;
  data: any;

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

    this.data = navParams.get('item');
    if (this.data != null){
      this.exercise = this.data;
      this.edit = true;
    }
    //this.setlifts = navParams.get('lifts');

    this.form = formBuilder.group({
      name: ['', Validators.required],
      variation: [''],
      muscle: MuscleGroup
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
    //console.log(this.exercise)

    //this.lifts = {};
    //this.setlifts = {};
    this.username = localStorage.getItem("username");
    console.log(this.username);

    this.exerciseService.getAllMuscleGroups().subscribe(data =>{
      this.mg = data;
    })
    
    this.getExercises().then((val) => {
      console.log(val)
      this.setlifts = val;
      this.lifts = this.setlifts;
      console.log(this.lifts);
    });
    
    console.log(this.setlifts);
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
    
    Object.keys(this.lifts).forEach ( (key) => {
      if(this.lifts[key].name == this.exercise.name && this.lifts[key].variation == this.exercise.variation){
        this.presentAlert();
        this.bool = false;
      }
    })

    var newExercise = new Exercise;
    newExercise.exerciseName = this.exercise.name;
    newExercise.variation = this.exercise.variation;
    newExercise.MuscleGroup = this.mgSelect;
    console.log(newExercise);

    this.exerciseService.createExercise(this.userService.getUser().id, newExercise).subscribe(data =>{
    })


    if(this.bool){
      
      if(this.edit){
        var oldKey = this.data.name + '-' + this.data.variation;
        delete this.lifts[oldKey];
      }
      
      var key = this.exercise.name + '-' + this.exercise.variation
      
      this.lifts[key] = this.exercise
      
      this.storage.set(this.username + '/exercises', this.lifts).then(() =>{
        this.done();
      });

    }
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
}
