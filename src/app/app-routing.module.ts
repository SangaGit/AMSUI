import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SupperAdminComponent } from './supper-admin/supper-admin.component';
import { RegisterComponent } from './user/register/register.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:'', redirectTo:'user/login', pathMatch:'full'},
  {path:'forbidden', component:ForbiddenComponent, canActivate:[AuthGuard]},
  {path:'user', component:UserComponent,
  children:[
    {path:'login', component:LoginComponent}
    ]
},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard] ,
  children:[
    {path:'adminpanel', component:SupperAdminComponent, canActivate:[AuthGuard], data : {roles:['SuperAdmin']}},
    {path:'usermanagement', component:UserManagementComponent, canActivate:[AuthGuard], data : {roles:['SuperAdmin']}}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
