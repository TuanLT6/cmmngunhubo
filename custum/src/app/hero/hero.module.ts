import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../core/services/dt.service';
import { ModalModule } from 'ngx-bootstrap/modal';


export const heroroutes : Routes=[
  {path:'',component:HeroComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(heroroutes)
  ],
  declarations: [HeroComponent],
  providers:[HeroService]
})
export class HeroModule { }
