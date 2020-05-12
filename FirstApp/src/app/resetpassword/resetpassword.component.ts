import { Component, OnInit } from '@angular/core';
import {ResetpasswordService}from'../shared/resetpassword.service';
import { UserResetPassword } from '../user-reset';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(public service:ResetpasswordService,
    private matsnackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  userreset: UserResetPassword=new UserResetPassword("","");
  message:any;

  
  public ResetNow(){
    let resp=this.service.doReset(this.userreset);
    resp.subscribe((data)=>
    {
      console.log(data);
      if(data!=null)
      {
        this.matsnackBar.open('Resetpassword', 'success',{
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
