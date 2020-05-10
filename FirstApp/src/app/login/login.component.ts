import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import {LoginService}from'../shared/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title='Welcome to FundooNoteAPI';
  constructor(public service:LoginService) { }
    

  ngOnInit() {
  }

}
