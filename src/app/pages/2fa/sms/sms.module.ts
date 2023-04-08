import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsPageRoutingModule } from './sms-routing.module';

import { SmsPage } from './sms.page';
import { TwoFAService } from 'src/app/services/2fa.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsPageRoutingModule,
   
  ],
  declarations: [SmsPage],
  providers: [TwoFAService] // lembra de sempre fazer o import do service como provider
})
export class SmsPageModule {}
