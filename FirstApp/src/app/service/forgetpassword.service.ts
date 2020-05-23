import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {


 
  constructor(public http:HttpClient) { }
  public doForget(userforget){
    return this.http.post("http://localhost:8080/user/forget",userforget,{responseType:'text' as 'json'});
  }

  form:FormGroup=new FormGroup({
    $key:new FormControl(),
    emailId:new FormControl('',Validators.required),
    mobileNo:new FormControl('',Validators.required),
  
  });
  
}
