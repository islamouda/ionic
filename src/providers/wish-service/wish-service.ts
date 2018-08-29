import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Locations } from '../../model/locations'


import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the WishServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WishServiceProvider {

  private gpsListRef = this.db.list<Locations>('placedatabase')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello WishServiceProvider Provider');
  }



  getLocationList(){
    return this.gpsListRef;
  }


  addLocation(locations:Locations){
    return this.gpsListRef.push(locations)
    
  }

  updateLocation(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
    
  }

  
  removeLocation(locations:Locations){
    return this.gpsListRef.remove(locations.key)
    
  }

  
}
