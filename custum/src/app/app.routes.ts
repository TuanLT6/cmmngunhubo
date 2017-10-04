import {Routes} from '@angular/router'
export const appRoutes : Routes = [
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
    {path:'hero',loadChildren:'./hero/hero.module#HeroModule'}
]