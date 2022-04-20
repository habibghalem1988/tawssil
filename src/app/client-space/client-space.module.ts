import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientSpacePageRoutingModule } from './client-space-routing.module';

import { ClientSpacePage } from './client-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientSpacePageRoutingModule
  ],
  declarations: [ClientSpacePage]
})
export class ClientSpacePageModule {}
