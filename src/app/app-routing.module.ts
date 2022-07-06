import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component';
import { ManagerComponent } from './managers/manager/manager.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';

// route: constan variable
const routes: Routes = [
  // name for each component for easy call
  { path: '', component: HomeComponent }, // '' redirection to home component if rout is empty e.g. webpage.com/
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'manager', component: ManagerComponent }, // redirect to manager component e.g. webpage.com/manager
  { path: 'customer', component: CustomerComponent }
];


@NgModule({
  // importe modules to be read
  imports: [RouterModule.forRoot(routes)],
  // export so they can be used from anywhere
  exports: [RouterModule]
})
export class AppRoutingModule { }
