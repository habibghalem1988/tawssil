import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientSpacePage } from './client-space.page';

const routes: Routes = [
  {
    path: '',
    component: ClientSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientSpacePageRoutingModule {}
