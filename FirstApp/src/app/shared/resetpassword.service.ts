import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor() { }
  form:FormGroup=new FormGroup({ 
    $key:new FormControl(null),
    password:new FormControl('',Validators.required),
   confirmpassword:new FormControl('',Validators.required),
  
  });
}
