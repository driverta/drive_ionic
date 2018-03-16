var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { CustomRecordsPage } from '../custom-records/custom-records';
import { Storage } from '@ionic/storage';
import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';
var ItemCreatePage = /** @class */ (function () {
    function ItemCreatePage(navCtrl, user, viewCtrl, formBuilder, camera, navParams, records, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.records = records;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.customPage = CustomRecordsPage;
        this.lifts = {};
        this.setlifts = {};
        this.exercise = { name: "", variation: "", muscle: "Chest" };
        this.username = "test";
        this.bool = true;
        this.edit = false;
        this.data = navParams.get('item');
        if (this.data != null) {
            this.exercise = this.data;
            this.edit = true;
        }
        //this.setlifts = navParams.get('lifts');
        this.form = formBuilder.group({
            name: ['', Validators.required],
            variation: [''],
            muscle: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        //this.myrecords = navParams.get('records') || records._records;
    }
    ItemCreatePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ItemCreatePage.prototype.ionViewDidLoad = function () {
        //console.log(this.exercise)
        var _this = this;
        //this.lifts = {};
        //this.setlifts = {};
        this.username = localStorage.getItem("username");
        console.log(this.username);
        this.getExercises().then(function (val) {
            console.log(val);
            _this.setlifts = val;
            _this.lifts = _this.setlifts;
            console.log(_this.lifts);
        });
        console.log(this.setlifts);
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    ItemCreatePage.prototype.saveExercise = function () {
        var _this = this;
        this.bool = true;
        Object.keys(this.lifts).forEach(function (key) {
            if (_this.lifts[key].name == _this.exercise.name && _this.lifts[key].variation == _this.exercise.variation) {
                _this.presentAlert();
                _this.bool = false;
            }
        });
        if (this.bool) {
            if (this.edit) {
                var oldKey = this.data.name + '-' + this.data.variation;
                delete this.lifts[oldKey];
            }
            var key = this.exercise.name + '-' + this.exercise.variation;
            this.lifts[key] = this.exercise;
            this.storage.set(this.username + '/exercises', this.lifts).then(function () {
                _this.done();
            });
        }
    };
    ItemCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Duplicate Exercise',
            subTitle: 'You already have an exercise with this name and Variation',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ItemCreatePage.prototype.getExercises = function () {
        var _this = this;
        this.storage.ready().then(function () {
            console.log(_this.storage.get(_this.username + '/exercises'));
        });
        return this.storage.get(this.username + '/exercises');
    };
    __decorate([
        ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], ItemCreatePage.prototype, "fileInput", void 0);
    ItemCreatePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-item-create',
            templateUrl: 'item-create.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ViewController,
            FormBuilder,
            Camera,
            NavParams,
            Records,
            AlertController,
            Storage])
    ], ItemCreatePage);
    return ItemCreatePage;
}());
export { ItemCreatePage };
//# sourceMappingURL=item-create.js.map