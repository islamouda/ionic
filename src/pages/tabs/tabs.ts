import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddplacePage } from '../addplace/addplace';
import { PlacemapPage } from '../placemap/Placemap';
import { PlacemodifyPage } from '../placemodify/placemodify';




@Component({
  
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  tab2Root = PlacemapPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
