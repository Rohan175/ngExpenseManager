import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home'
  },{ 
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
  },{ 
    path: 'about', 
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) 
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(m => m.SettingsModule)
  },{
    path:'**',
    redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
