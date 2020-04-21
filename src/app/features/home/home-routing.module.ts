import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { CrudComponent } from './crud/components/crud.component';
import { EList2Component } from './expenses/e-list2/e-list2.component';
import { EReportComponent } from './expenses/e-report/e-report.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children : [
    {
      path: 'todo',
      component: TodosContainerComponent
    },{
      path: 'crud',
      component: CrudComponent
    },{
      path: 'crud/:id',
      component: CrudComponent
    },
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
