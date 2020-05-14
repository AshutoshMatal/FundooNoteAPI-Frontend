import { Component, OnInit } from '@angular/core';
import { ForgetpasswordService } from '../shared/forgetpassword.service';
import { UserForgetPassword } from '../Dto/user-forget';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(public service: ForgetpasswordService,
    private matsnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  userforget: UserForgetPassword = new UserForgetPassword("", 0);
  message: any;
  public ForgetNow() {
    let resp = this.service.doForget(this.userforget);
    resp.subscribe((data) => {
      console.log(data);
      if (data != null) {
        this.matsnackBar.open('Forgetpassword', 'success', {
          duration: 1000,
          verticalPosition: 'top'
        });
      } else {
        this.matsnackBar.open("Enter valid data", 'Failed', {
          duration: 1000,
          verticalPosition: 'top'
        });
      }
    },
      error => {
        console.log('Error', error);
      }
    );
  }



}
