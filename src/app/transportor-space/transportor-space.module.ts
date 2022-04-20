import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportorSpacePageRoutingModule } from './transportor-space-routing.module';

import { TransportorSpacePage } from './transportor-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportorSpacePageRoutingModule
  ],
  declarations: [TransportorSpacePage]
})
export class TransportorSpacePageModule {}
