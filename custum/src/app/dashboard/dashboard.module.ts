import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroService } from '../core/services/dt.service';
import { FormsModule } from '@angular/forms';

export const routes : Routes=[
  {path:'',component:DashboardComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
  providers:[HeroService]
})
export class DashboardModule { }
