import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(public http:HttpClient) { }
  public doReset(userreset){
    return this.http.put("http://localhost:8080/user/reset",userreset,{responseType:'text' as 'json'});
  } 
  form:FormGroup=new FormGroup({ 
    $key:new FormControl(),
    password:new FormControl('',Validators.required),
   confirmPassword:new FormControl('',Validators.required),
  
  });
}
