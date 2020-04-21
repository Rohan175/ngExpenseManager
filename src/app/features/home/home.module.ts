import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import {reducers,FEATURE_NAME} from './home.state';
import { StoreModule } from '@ngrx/store';
import { CrudComponent } from './crud/components/crud.component';
import { PListComponent } from './participants/p-list/p-list.component';
import { EListComponent } from './expenses/e-list/e-list.component';
import { EItemComponent } from './expenses/e-item/e-item.component';
import { EList2Component } from './expenses/e-list2/e-list2.component';
import { EItem2Component } from './expenses/e-item2/e-item2.component';
import { GListComponent } from './groups/g-list/g-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EReportComponent } from './expenses/e-report/e-report.component';

@NgModule({
  imports: [SharedModule,FlexLayoutModule,HomeRoutingModule,StoreModule.forFeature(FEATURE_NAME, reducers)],
  declarations: [HomeComponent,TodosContainerComponent, CrudComponent, PListComponent, EListComponent, EItemComponent, EList2Component, EItem2Component, GListComponent, EReportComponent],
  
    
})
export class HomeModule { } 
