import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddplacePage } from '../addplace/addplace';
import { PlacemapPage } from '../placemap/Placemap';
import { PlacemodifyPage } from '../placemodify/placemodify';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  goToAddPlacesPage(){ 

    this.navCtrl.push(AddplacePage)
    console.log ('goToAddPlacesPage')
      }

 goToShowPlacesPage(){   

  this.navCtrl.push(PlacemodifyPage)
  console.log ('goToShowPlacesPage')
      }


}


