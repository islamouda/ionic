import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../model/locations'
import { WishServiceProvider } from '../../providers/wish-service/wish-service'
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { ContactPage } from '../contact/contact';




/**
 * Generated class for the PlacemodifyPage page. 
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placemodify',
  templateUrl: 'placemodify.html',
})
export class PlacemodifyPage {


  gifList : AngularFireObject<any>
  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  };

  itemArray=[];
  myObject = []


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public wishServiceProvider: WishServiceProvider,
    public alertCtrl: AlertController,
    db: AngularFireDatabase
  ) {

    this.gifList = db.object('placedatabase');
    this.gifList.snapshotChanges().subscribe(action => {
     

      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data' )
      } else {

      this.itemArray.push(action.payload.val() as Locations)
      console.log ( this.itemArray)
      this.myObject = Object.entries(this.itemArray[0])
      console.log ( this.myObject)
    }

 
     });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacemodifyPage');
  }

  updateLocation(locations:Locations){
    this.wishServiceProvider.updateLocation(locations).then( () =>{
      this.navCtrl.setRoot(ContactPage)
      console.log('updated')
    })
  }

  
  removeLocation(locations:Locations){
    this.wishServiceProvider.removeLocation(locations).then( () =>{
      this.navCtrl.setRoot(ContactPage)

      console.log('updated')

    })  
  }



  showPrompt(key , info , latitude , longitude ) {
    const prompt = this.alertCtrl.create({
      title: 'تعديل',
      message: "تعديل على المعلومات الحالية ",
      inputs: [
        {
          name: 'Info',
          value: info
        },
        {
          name: 'Latitude',
          value: latitude
        },
        {
          name: 'Longitude',
          value: longitude
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            // console.log('Saved clicked');

            this.locations.info = data.Info
            this.locations.latitude = data.Latitude
            this.locations.longitude = data.Longitude
            this.locations.key = key
            this.updateLocation(this.locations)
            
          }
     

        }
      ]
    });
    prompt.present();
  }






}
