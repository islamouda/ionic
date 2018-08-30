import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../model/locations'
import { WishServiceProvider } from '../../providers/wish-service/wish-service'
import { AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the AddplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addplace', 
  templateUrl: 'addplace.html',
})
export class AddplacePage {

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public wishServiceProvider: WishServiceProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddplacePage');
  }


  addLocation(locations:Locations){
    this.wishServiceProvider.addLocation(locations).then(ref =>{
      this.showAlert()
      this.navCtrl.setRoot(ContactPage)
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
