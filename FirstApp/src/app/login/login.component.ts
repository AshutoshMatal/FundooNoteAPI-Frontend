import { Component, OnInit } from '@angular/core';
import {LoginService}from'../shared/login.service';
import { UserLogin } from '../user-login';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title='Welcome to FundooNoteAPI';
  constructor(public service:LoginService,
    private matsnackBar:MatSnackBar
    ) { }
  
  ngOnInit() {
  }
  userlogin: UserLogin=new UserLogin("","");
  message:any;

  public loginNow(){
    let resp=this.service.doLogin(this.userlogin);
    resp.subscribe((data)=>
    {
      console.log(data);
      if(data!=null)
      {
        this.matsnackBar.open('Login Successfully', 'LoginIn',{
          duration:1000,
          verticalPosition:'top'
        });
      }else{
        this.matsnackBar.open("Enter valid data",'Login Failed',{
          duration:1000,
          verticalPosition:'top'
        });
      }   
},
error=>{
  console.log('Error',error);
}
    );
}

}
