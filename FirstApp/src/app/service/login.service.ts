import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../Dto/user-login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  public doLogin(userlogin){
    return this.http.post("http://localhost:8080/user/login",userlogin,{responseType:'text' as 'json'});
  }


  form:FormGroup=new FormGroup({ 
    $key:new FormControl(),
    emailId:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  
  });
}

