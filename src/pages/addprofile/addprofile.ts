import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profiles } from '../../model/profiles'
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service'
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

/**
 * Generated class for the AddprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addprofile',
  templateUrl: 'addprofile.html',
})
export class AddprofilePage { 

  profiles:Profiles={

    name:'',
    lname:'',
    age:'',
    deb:''


  }

  constructor(public navCtrl: NavController, public navParams: NavParams , public profileServiceProvider:ProfileServiceProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofilePage');
  }

  addProfile(profiles:Profiles){
    this.profileServiceProvider.addProfiles(profiles).then(ref =>{
      this.showAlert()
      this.navCtrl.setRoot(TabsPage)
      // or
      // this.navCtrl.pop

    })

  }






  showAlert() {
    const alert = this.alertCtrl.create({
      title: ' رائع!',
      subTitle: 'شكرا لكم!',
      buttons: ['حسناَ']
    });
    alert.present();
  }


}
