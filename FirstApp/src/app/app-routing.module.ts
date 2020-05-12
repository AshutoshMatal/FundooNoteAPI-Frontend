import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


const routes: Routes = [{
  path:"",
  redirectTo:"register",pathMatch:"full"
},{
  path:"login",
  component:LoginComponent
},{
  path:"register",
  component:RegisterComponent
},{
  path:"reset",
  component:ResetpasswordComponent
},{
  path:"forgetpassword",
  component:ForgetpasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }