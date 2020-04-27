import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EList2Component } from './expenses/e-list2/e-list2.component';
import { EReportComponent } from './expenses/e-report/e-report.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children : [
    {
      path: 'group/:id',
      component: EList2Component
    },{
      path: 'group/:id/report',
      component: EReportComponent
    },
  ] },
  // path: 'todo', component: TodosContainerComponent,
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
