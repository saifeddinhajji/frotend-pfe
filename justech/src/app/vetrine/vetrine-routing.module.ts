import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {path:'',component:LayoutComponent},
  {path:'login',component:LoginComponent},
  {path:'select',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetrineRoutingModule { }
