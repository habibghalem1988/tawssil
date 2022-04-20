import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { PresentationPageRoutingModule } from './presentation-routing.module';

import { PresentationPage } from './presentation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    PresentationPageRoutingModule
  ],
  declarations: [PresentationPage]
})
export class PresentationPageModule {}
