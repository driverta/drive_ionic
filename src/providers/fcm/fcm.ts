import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProvidersUserProvider } from '../providers-user/providers-user'

@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform,
    private userService: ProvidersUserProvider
  ) {}

  // Get permission from the user
  async getToken() {
    let token;
  
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    } 
  
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      console.log(token);
      await this.firebaseNative.grantPermission();
    }

    return this.saveTokenToFirestore(token)
  }

  // Save the token to firestore
  private saveTokenToFirestore(token) {
    console.log("TOKEN")
    console.log(token);
    if (!token) return;
    const devicesRef = this.afs.collection('devices')
    let platform;
    if (this.platform.is('android')) {
      platform = 'android'
    } else {
      platform = 'ios'
    }

    const docData = { 
      token,
      userId: this.userService.getUser().username,
      platform
    }
    console.log(docData);
  
    return devicesRef.doc(token).set(docData);
  }

  // Save the token to firestore
  async sendCompetingNotification(userId, competingId) { 
    const devicesRef = this.afs.collection('subscribers')
  
    const docData = { 
      userId: userId,
      competingId: competingId,
    }
    return devicesRef.doc(userId).set(docData);
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}