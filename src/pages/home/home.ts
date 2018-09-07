import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { LoginPage } from '../login/login';
import { AddprofilePage } from '../addprofile/addprofile';
import { Profiles } from '../../model/profiles'
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proList : AngularFireObject<any>

  profiles:Profiles={

    name:'',
    lname:'',
    age:'',
    deb:''
  }

  itemproArray=[];
  proObject = []

  constructor(public navCtrl: NavController,public authServiceProvider: AuthServiceProvider , public profileServiceProvider:ProfileServiceProvider,
    public alertCtrl: AlertController,
    db: AngularFireDatabase) {


      this.proList = db.object('profilesdatabase');
      this.proList.snapshotChanges().subscribe(action => {
       
  
        if (action.payload.val() == null || action.payload.val() == undefined) {
          console.log('no data' )
        } else {
  
        this.itemproArray.push(action.payload.val() as Profiles)
        console.log ( this.itemproArray)
        this.proObject = Object.entries(this.itemproArray[0])
        console.log ( this.proObject)
      }
  
   
       });
  }

   
  logout(){
    this.authServiceProvider.signOut();
    this.navCtrl.setRoot(LoginPage)
  }

  goTOProfileNew(){
    this.navCtrl.setRoot(AddprofilePage)

  }



  updateProfiles(profiles:Profiles){
    this.profileServiceProvider.updateProfiles(profiles).then( () =>{
      this.navCtrl.setRoot(TabsPage)
      console.log('updated')
    })
  }

  
  removeProfiles(profiles:Profiles){
    this.profileServiceProvider.removeProfiles(profiles).then( () =>{
      this.navCtrl.setRoot(TabsPage)

      console.log('updated')

    })  
  }



  showPrompt(key , name , lname , age , deb ) {
    const prompt = this.alertCtrl.create({
      title: 'تعديل',
      message: "تعديل على المعلومات الحالية ",
      inputs: [
        {
          name: 'name',
          value: name
        },
        {
          name: 'lname',
          value: lname
        },
        {
          name: 'age',
          value: age
        }, 
        {
          name: 'deb',
          value: deb
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

            this.profiles.name = data.name
            this.profiles.lname = data.lname
            this.profiles.age = data.age
            this.profiles.deb = data.deb
            this.profiles.key = key
            this.updateProfiles(this.profiles)
            
          }
     

        }
      ]
    });
    prompt.present();
  }










}
