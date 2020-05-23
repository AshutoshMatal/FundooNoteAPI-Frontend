import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteIconsComponent } from './note-icons/note-icons.component';
import { AuthenticationguardService as AuthenticationService } from './shared/authenticationguard.service';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [{
  path:"",
  redirectTo:"login",pathMatch:"full"
},{
  path:"login",
  component:LoginComponent
},{
  path:"register",
  component:RegisterComponent
},{
  path:"reset/:token",
  component:ResetpasswordComponent
},{
  path:"forget",
  component:ForgetpasswordComponent
},{ path: "icon", component: NoteIconsComponent }
  ,
{
  path:"dashboard",
  component:DashboardComponent,

 //canActivate: [AuthenticationService] ,
  children:[
    { path: '', component: AddNoteComponent },
    { path: 'addnote', component: AddNoteComponent },
    { path: 'card', component: CardsComponent }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
