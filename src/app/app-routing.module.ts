import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { BindingComponent } from './components/binding/binding.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "binding", component : BindingComponent},
  {path : "addAdmin", component : AddAdminComponent},
  {path : "addChef", component : AddChefComponent},
  {path : "signUp", component : SignupComponent},
  {path : "dashboardAdmin", component : DashboardAdminComponent},
  {path : "dashboardChef", component : DashboardChefComponent},
  {path : "addPlat", component : AddPlatComponent},
  // dynamic path
  {path : "editUser/:id", component : AddAdminComponent},
  {path : "editChef/:id", component : AddChefComponent},
  {path : "editPlat/:id", component : AddPlatComponent},
  {path : "chefs", component : ChefsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
