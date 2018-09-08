import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { ContactPage } from '../contact/contact'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  data = {
    email:"",
    password:""
  
  }



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
  public fire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    let credentials = {
            email: this.data.email,
            password: this.data.password
    }

this.authServiceProvider.signInWithEmail(credentials).then(
  ()=> this.navCtrl.setRoot(TabsPage),
  error => console.log('error')
)

  }




goToRegister(){
  this.navCtrl.push(RegisterPage)
}


logINFacebook(){
  this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
    this.navCtrl.setRoot(ContactPage),
    console.log(res);
    
  })

}


logINGoogle(){
  this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
    this.navCtrl.setRoot(ContactPage),
    console.log(res);
    
  })

}




}
