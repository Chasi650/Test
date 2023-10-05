import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { AdminComponent } from './Admin/admin.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/Home', pathMatch:'full'
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Admin', component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
