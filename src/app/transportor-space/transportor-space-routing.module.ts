import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportorSpacePage } from './transportor-space.page';

const routes: Routes = [
  {
    path: '',
    component: TransportorSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportorSpacePageRoutingModule {}
