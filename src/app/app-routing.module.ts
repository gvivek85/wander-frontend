import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',
    component:DefaultComponent,
    children:[{
      path: '',
      component: DashboardComponent
    }]},
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
