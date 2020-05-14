import { Component, OnInit } from '@angular/core';
import { User } from '../Dto/user';
import { RegisterService } from '../shared/register.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user: User=new User("","","","","",0);
  message:any;

  constructor(public service:RegisterService,
    private matsnackBar:MatSnackBar) { }
  
  ngOnInit() {
  }
  public registerNow(){
    
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>
    {
      console.log(data);
      if(data!=null)
      {
        this.matsnackBar.open('Registration Successfully', 'RegisterIn',{
          duration:5000,
          verticalPosition:'top'
        });
      }else{
        this.matsnackBar.open("Enter valid data",'Registration Failed',{
          duration:5000
        });
      }   
},
error=>{
  console.log('Error',error);
}
    );
}
}
