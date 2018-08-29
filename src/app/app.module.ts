import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddplacePage } from '../pages/addplace/addplace';
import { PlacemapPage } from '../pages/placemap/Placemap';
import { PlacemodifyPage } from '../pages/placemodify/placemodify';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WishServiceProvider } from '../providers/wish-service/wish-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig  = {
  apiKey: "AIzaSyC7Le4OcazGu8dpyI3_PE9jCCDcPukndQc",
  authDomain: "wish-74721.firebaseapp.com",
  databaseURL: "https://wish-74721.firebaseio.com",
  projectId: "wish-74721",
  storageBucket: "wish-74721.appspot.com",
  messagingSenderId: "821124576066"
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddplacePage,
    PlacemapPage,
    PlacemodifyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddplacePage,
    PlacemapPage,
    PlacemodifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
