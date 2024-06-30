import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { FormComponent } from './components/form/form/form.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [

  {path:'nav' , component:NavbarComponent},
  {path:'employee' , component:EmployeeComponent},
  {path:'form' , component:FormComponent},
  {path:'home' , component:HomeComponent},
  {path:'**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
