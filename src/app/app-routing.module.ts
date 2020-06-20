import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { DefaultComponent } from './default/default.component';
import { UsersComponent } from './users/users.component'
import { AuthorizationService } from './authorization.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard', component:DefaultComponent,
  canActivate: [AuthorizationService],
    children:[{
      path: '',
      component: DashboardComponent
    }, {
      path: 'users', 
      component:UsersComponent
    }]},
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
