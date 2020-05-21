import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators ,FormBuilder } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { UserLogin } from '../Dto/user-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  
  loginForm: FormGroup;

  login:UserLogin = new UserLogin();
  
  constructor(private matsnackbar: MatSnackBar, private service: ServiceService, private router: Router) { }
  emailId = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(4)]);

  ngOnInit() {

  }
  loginNow() {
    this.login.emailId = this.emailId.value;
    this.login.password = this.password.value;
    this.service.login(this.login).subscribe(
    (response:any) => {

      //Token has been added in the local storage 
      localStorage.setItem('token', response.data);
      console.log(response);
      localStorage.setItem('email', this.emailId.value);
          this.matsnackbar.open(response.message, "Login Succesfull", {duration:5000})
          this.router.navigate(['dashboard']);
    },
    (error:any)=> {
      this.matsnackbar.open(error.error.message, "Login Failed", {duration:5000})
    
    }
   );
  }
}

  /*
    console.log(this.emailId.value);
    const user = {
      emailId: this.emailId.value,
      password: this.password.value
    };
    this.service.login(user).subscribe(
     data => {
       console.log(data);
       
       if (data.statuscode == 200) {

        console.log('All data===>'+data);
                this.matsnackbar.open(' Login Successfully ', 'LogIn', {
           duration: 2000
         });     
         this.router.navigate(['dashboard']);
         localStorage.setItem("login", data.token);
         localStorage.setItem("emailId", user.emailId);
          
     }
     else {
      this.matsnackbar.open("Enter valid data", 'Login Failed', {
        duration: 2000
      });

    }
  },
      (error) => {
        console.log('Error', error);
        this.matsnackbar.open(error.message,"login failed",{
          duration:5000})
        });
      }
  /*
  userlogin: UserLogin = new UserLogin("", "");
    message: any;
  
    public loginNow() {
      let response = this.loginservice.doLogin(this.userlogin);
      response.subscribe((data) => {
        console.log(data);
        if (data != null) {
          this.matsnackBar.open('Login Successfully', 'Success', {
            duration: 1000,
            verticalPosition: 'top'
          });
          this.router.navigate(['dashboard']);
          
        }
        else {
          this.matsnackBar.open("Enter valid data", 'Login Failed', {
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
  
  }*/

