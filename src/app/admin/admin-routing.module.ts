import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: OverviewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
