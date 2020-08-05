import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [AdminComponent, OverviewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ],
})
export class AdminModule {}
