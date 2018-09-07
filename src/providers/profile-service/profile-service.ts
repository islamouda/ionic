import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profiles } from '../../model/profiles'
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  private proListRef = this.db.list<Profiles>('profilesdatabase')


  constructor(public db:AngularFireDatabase) {
    console.log('Hello ProfileServiceProvider Provider');
  }


  getProfilesList(){
    return this.proListRef;
  }


  addProfiles(profiles:Profiles){
    return this.proListRef.push(profiles)
    
  }

  updateProfiles(profiles:Profiles){
    return this.proListRef.update(profiles.key,profiles)
    
  }

  
  removeProfiles($key){
    return this.proListRef.remove($key)
    
  }


} 
