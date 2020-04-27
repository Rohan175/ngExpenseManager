import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {reducers,FEATURE_NAME} from './home.state';
import { StoreModule } from '@ngrx/store';
import { PListComponent } from './participants/p-list/p-list.component';
import { EListComponent } from './expenses/e-list/e-list.component';
import { EItemComponent } from './expenses/e-item/e-item.component';
import { EList2Component } from './expenses/e-list2/e-list2.component';
import { EItem2Component } from './expenses/e-item2/e-item2.component';
import { GListComponent } from './groups/g-list/g-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EReportComponent } from './expenses/e-report/e-report.component';
import { HorizontalListComponent } from './components/horizontal-list/horizontal-list.component';

@NgModule({
  imports: [SharedModule,FlexLayoutModule,HomeRoutingModule,StoreModule.forFeature(FEATURE_NAME, reducers)],
  declarations: [HomeComponent, PListComponent, EListComponent, EItemComponent, EList2Component, EItem2Component, GListComponent, EReportComponent, HorizontalListComponent],
  
    
})
export class HomeModule { } 
