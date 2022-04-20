import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = ()=> redirectUnauthorizedTo(['login']);
const redirectLoggedInToTransportorSpace = ()=>redirectLoggedInTo(['transportor-space']);
const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToTransportorSpace)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'client-space',
    loadChildren: () => import('./client-space/client-space.module').then( m => m.ClientSpacePageModule)
  },
  {
    path: 'transportor-space',
    loadChildren: () => import('./transportor-space/transportor-space.module').then( m => m.TransportorSpacePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path:'**',
    redirectTo:'presentation',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
