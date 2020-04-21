import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {StoreRouterConnectingModule, RouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer} from './route-serializable';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import {
  AppState,
  selectSettingsState,
  reducers,
  selectRouterState
} from './core.state';

export {
  AppState,
  selectSettingsState,
  selectRouterState
}
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,

    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'NgrxPlayGround'
        }),


  ],
  providers: [
    { provide: RouterStateSerializer , useClass : CustomSerializer}
  ],
  exports : [
    MainLayoutComponent
  ]
})
export class CoreModule { }
