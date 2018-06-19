import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as firebase from 'firebase';
admin.initializeApp();


exports.newSubscriberNotification = functions.firestore
    .document('subscribers/{subscriptionId}')
    .onCreate(async event => {
        
    const data = event.data

    const userId = data.get('userId')
    const competing = data.get('competingId')
    // const platform = data.get('platform');

    // ref to the device collection for the user
    const db = admin.firestore()
    const devicesRef = db.collection('devices').where('userId', '==', userId)

    let payload = {
        notification: {
            title: 'New Competitor',
            body: `${competing} is now competing with you!`,
            icon: 'https://goo.gl/Fz9nrQ',
        },
        data: {
            user: `${competing}`
        }
    }



    // get the user's tokens and send notifications
    const devices = await devicesRef.get();

    const tokens = [];

    // send a notification to each device token
    devices.forEach(result => {
      const token = result.data().token;

      tokens.push( token )
    })
    db.collection("subscribers").doc(userId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    await admin.messaging().sendToDevice(tokens, payload);
});