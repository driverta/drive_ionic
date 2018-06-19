"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.newSubscriberNotification = functions.firestore
    .document('subscribers/{subscriptionId}')
    .onCreate((event) => __awaiter(this, void 0, void 0, function* () {
    const data = event.data;
    const userId = data.get('userId');
    const competing = data.get('competingId');
    // const platform = data.get('platform');
    // ref to the device collection for the user
    const db = admin.firestore();
    const devicesRef = db.collection('devices').where('userId', '==', userId);
    let payload = {
        notification: {
            title: 'New Competitor',
            body: `${competing} is now competing with you!`,
            icon: 'https://goo.gl/Fz9nrQ',
        },
        data: {
            user: `${competing}`
        }
    };
    // get the user's tokens and send notifications
    const devices = yield devicesRef.get();
    const tokens = [];
    // send a notification to each device token
    devices.forEach(result => {
        const token = result.data().token;
        tokens.push(token);
    });
    db.collection("subscribers").doc(userId).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
    yield admin.messaging().sendToDevice(tokens, payload);
}));
//# sourceMappingURL=index.js.map