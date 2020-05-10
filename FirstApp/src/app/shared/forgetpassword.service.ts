import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor() { }
  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    emailId:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  
  });
  
}
