import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';

import { BuildingPageRoutingModule } from './building-routing.module';

import { BuildingPage } from './building.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildingPageRoutingModule
  ],
  declarations: [BuildingPage],
 // providers: [ToastController]
})
export class BuildingPageModule {}
