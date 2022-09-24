import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { BindingComponent } from './components/binding/binding.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
