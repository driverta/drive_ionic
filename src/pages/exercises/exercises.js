var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import firebase from 'firebase';
import { User } from '../../providers/providers';
var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, user, items, records, modalCtrl, alertCtrl, actShtCtrl, storage, platform) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.items = items;
        this.records = records;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.actShtCtrl = actShtCtrl;
        this.storage = storage;
        this.platform = platform;
        this.lifts = {};
        this.setlifts = {};
        this.username = "bob";
        this.users = [];
        this.names = ["Lift 1"];
        this.about = ["nothing"];
        this.filter = "All";
        this.show = true;
        this.loop = 0;
        this.gains = 0;
        this.status = "";
        this.totalGains = [];
        this.platform.ready().then(function (readySource) {
            console.log("anything");
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
        });
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.username = localStorage.getItem("username");
        console.log(this.username);
        this.lifts = {};
        this.setlifts = {};
        // Get user data status
        this.getUsers().then(function (val) {
            console.log("Slut");
            if (val != null) {
                _this.users = val;
            }
            if (_this.users.includes(_this.username)) {
                _this.status = _this.username;
            }
            else {
                _this.status = "cloud";
            }
        }).then(function () {
            if (_this.status == _this.username) {
                _this.getExercises().then(function (val) {
                    console.log(val);
                    _this.setlifts = val;
                    _this.lifts = _this.setlifts;
                    _this.show = false;
                    var exercises = firebase.database().ref('/' + _this.username + '/exercises');
                    exercises.set(_this.setlifts);
                });
            }
            else {
                var query1 = firebase.database().ref('/' + _this.username + '/exercises');
                query1.once("value").then(function (snapshot) {
                    _this.loop = 0;
                    snapshot.forEach(function (childSnapshot) {
                        console.log(childSnapshot);
                        _this.loop++;
                        var childData1 = childSnapshot.val();
                        var key = childSnapshot.key;
                        _this.setlifts[key] = childData1;
                        _this.lifts = _this.setlifts;
                        if (snapshot.numChildren() == _this.loop) {
                            //alert("HERE")
                            _this.show = false;
                            _this.saveData();
                        }
                    });
                });
            }
        });
    };
    ListMasterPage.prototype.saveData = function () {
        var _this = this;
        // Get user data status
        this.getUsers().then(function (val) {
            console.log(val);
            if (val == null) {
                _this.users.push(_this.username);
            }
            else {
                _this.users = val;
                _this.users.push(_this.username);
            }
            _this.storage.set('/users', _this.users);
            _this.status = _this.username;
        });
        this.storage.set(this.username + '/exercises', this.setlifts);
        this.storage.set(this.username + '/gains', this.totalGains);
        var queryGains = firebase.database().ref('/' + this.username + '/gains');
        queryGains.once("value").then(function (snapshot) {
            if (!snapshot) {
                //alert("nope")
            }
            _this.loop = 0;
            _this.gains = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData2 = childSnapshot.val();
                _this.totalGains.push(childData2);
                if (snapshot.numChildren() == _this.loop) {
                    //alert("My Dear")
                    _this.storage.set(_this.username + '/gains', _this.totalGains);
                }
            });
        });
    };
    ListMasterPage.prototype.getUsers = function () {
        console.log("at user method");
        console.log(JSON.stringify(this.storage.get('/users')));
        return this.storage.get('/users');
    };
    ListMasterPage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    ListMasterPage.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    ListMasterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getExercises().then(function (val) {
            if (val != null) {
                _this.setlifts = val;
            }
        });
        if (this.status == this.username) {
            this.getExercises().then(function (val) {
                var exercises = firebase.database().ref(_this.username + '/exercises');
                exercises.set(val);
            });
            this.getGains().then(function (val) {
                var gains = firebase.database().ref(_this.username + '/gains');
                gains.set(val);
            });
        }
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        //this.navCtrl.push('ItemCreatePage');
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.ionViewDidLoad();
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.presentConfirm = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete?',
            message: 'Do you want to delete ' + item.name + ' from you exercises? You will keep the gains',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteItem(item);
                    }
                }
            ]
        });
        alert.present();
    };
    ListMasterPage.prototype.deleteItem = function (item) {
        var _this = this;
        var name = item['name'];
        var variation = item['variation'];
        Object.keys(this.setlifts).forEach(function (key) {
            if (_this.setlifts[key].name == name && _this.setlifts[key].variation == variation) {
                delete _this.setlifts[key];
                _this.storage.set(_this.username + '/exercises', _this.setlifts).then(function () {
                    _this.ionViewDidLoad();
                });
            }
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        if (item.muscle == "Cardio") {
            this.navCtrl.push('CardioPage', {
                item: item
            });
        }
        else {
            this.navCtrl.push('ItemDetailPage', {
                item: item
            });
        }
    };
    ListMasterPage.prototype.filterExercises = function () {
        var _this = this;
        var actionSheet = this.actShtCtrl.create({
            title: 'Filter Exercises By Muscle Group',
            buttons: [
                {
                    text: 'All',
                    handler: function () {
                        _this.lifts = _this.setlifts;
                    }
                }, {
                    text: 'Chest',
                    handler: function () {
                        _this.filter = "Chest";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Back',
                    handler: function () {
                        _this.filter = "Back";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Legs',
                    handler: function () {
                        _this.filter = "Legs";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Core',
                    handler: function () {
                        _this.filter = "Core";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Shoulders',
                    handler: function () {
                        _this.filter = "Shoulders";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Arms',
                    handler: function () {
                        _this.filter = "Arms";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Cardio',
                    handler: function () {
                        _this.filter = "Cardio";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Other',
                    handler: function () {
                        _this.filter = "Other";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ListMasterPage.prototype.executeFilter = function () {
        var _this = this;
        this.lifts = {};
        //alert(this.lifts["Bench Press-Barbell"].name)
        Object.keys(this.setlifts).forEach(function (key, index) {
            if (_this.setlifts[key].muscle == _this.filter) {
                _this.lifts[key] = _this.setlifts[key];
            }
        });
    };
    ListMasterPage.prototype.editExercise = function (item) {
        this.navCtrl.push('ItemCreatePage', {
            item: item
        });
    };
    ListMasterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-exercises',
            templateUrl: 'exercises.html'
        })
        //@Injectable()
        ,
        __metadata("design:paramtypes", [NavController,
            User,
            Items,
            Records,
            ModalController,
            AlertController,
            ActionSheetController,
            Storage,
            Platform])
    ], ListMasterPage);
    return ListMasterPage;
}());
export { ListMasterPage };
//# sourceMappingURL=exercises.js.map