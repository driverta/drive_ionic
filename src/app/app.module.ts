import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { DataService } from '../providers/api/firebase';
import { Records } from '../providers/records/records';
import { Levels } from '../providers/levels/levels';
import { HistoryProvider } from '../providers/history/history';
import { FeathersProvider } from '../providers/feathers/feathers';
import { ProvidersUserProvider } from '../providers/providers-user/providers-user';
import { ExerciseProvider } from '../providers/exercise/exercise';
import { AuthProvider } from "../providers/auth/auth";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SortByGainsPipe } from '../pipes/sort-by-gains/sort-by-gains'
import { Keyboard } from '@ionic-native/keyboard'

import { AppVersion } from '@ionic-native/app-version';
import { JwtHttpInterceptor } from '../providers/auth/jwt-http-interceptor'

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

const firebase = {
  apiKey: "AIzaSyCBYJ0--a38rC2Uhd28z5g3B449Kkz-fJE",
  authDomain: "drive-cadf7.firebaseapp.com",
  databaseURL: "https://drive-cadf7.firebaseio.com",
  projectId: "drive-cadf7",
  storageBucket: "drive-cadf7.appspot.com",
  messagingSenderId: "564282992846"
};

// export function jwtOptionsFactory(storage: Storage) {
//   return {
//     tokenGetter: () => storage.get('jwt_token'),
//     // whitelistedDomains: ['localhost:8080', 'drive-cadf7.firebaseapp.com', 'elasticbeanstalk.com']
//     whitelistedDomains: new Array(new RegExp('^null$'))
//   }
// }

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    // JwtModule.forRoot({
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: jwtOptionsFactory,
    //     deps: [Storage]
    //   }
    // })
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    DataService,
    Items,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    ProvidersUserProvider,
    Keyboard,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
    Records,
    Levels,
    HistoryProvider,
    FeathersProvider,
    ExerciseProvider,
    FcmProvider,
    Firebase,
    AuthProvider,
    AppVersion,
    SortByGainsPipe
  ]
})
export class AppModule { }
