import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  constructor(public http:HttpClient) { }
  public doRegistration(user){
    return this.http.post("http://localhost:8080/user/register",user,{responseType:'text' as 'json'});
  }

  form: FormGroup=new FormGroup({
    $key :new FormControl(null),
    username:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    emailId:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    mobileNo:new FormControl('',[Validators.required,Validators.minLength(10)])
});
}
