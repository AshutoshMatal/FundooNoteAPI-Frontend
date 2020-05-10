import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  form:FormGroup=new FormGroup({ 
    $key:new FormControl(null),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  
  });
}
