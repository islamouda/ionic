import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AddplacePage } from '../pages/addplace/addplace';
import { PlacemapPage } from '../pages/placemap/Placemap';
import { PlacemodifyPage } from '../pages/placemodify/placemodify';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WishServiceProvider } from '../providers/wish-service/wish-service';
import { LoginPage } from '../pages/login/login';
import { AddprofilePage } from '../pages/addprofile/addprofile';
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';




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
    PlacemodifyPage,
    RegisterPage,
    LoginPage,
    AddprofilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
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
    PlacemodifyPage,
    RegisterPage,
    LoginPage,
    AddprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WishServiceProvider,
    AngularFireAuth,
    AuthServiceProvider,
    ProfileServiceProvider
  ]
})
export class AppModule {}
