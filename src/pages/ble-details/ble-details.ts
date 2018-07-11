import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';


/**
 * Generated class for the BleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ble-details',
  templateUrl: 'ble-details.html',
})
export class BleDetailsPage {

  peripheral: any = {};
  statusMessage: string;
  services = []
  device: any;
  serviceFound: string;
  data: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private ble: BLE,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private ngZone: NgZone) {

    this.device = navParams.get('device');

    this.setStatus('Connecting to ' + this.device.name || this.device.id);

    this.ble.connect(this.device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );

  }

  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.setStatus('');
      this.peripheral = peripheral;
    });

    this.peripheral = peripheral;
    this.setStatus('Connected to ' + (peripheral.name || peripheral.id));

    this.peripheral.characteristics.forEach(characteristic => {
      this.ble.startNotification(this.peripheral.id, characteristic.service, characteristic.characteristic).subscribe(
        data => this.data = String.fromCharCode.apply(null, new Int16Array(data)),
        () => this.showAlert('Unexpected Error', 'Failed to subscribe for button state changes')
      )
    });
  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  // Disconnect peripheral when leaving the page
  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => {

      },
      () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    )
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
