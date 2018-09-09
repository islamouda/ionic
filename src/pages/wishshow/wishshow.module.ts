import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishshowPage } from './wishshow';

@NgModule({
  declarations: [
    WishshowPage,
  ],
  imports: [
    IonicPageModule.forChild(WishshowPage),
  ],
})
export class WishshowPageModule {}
