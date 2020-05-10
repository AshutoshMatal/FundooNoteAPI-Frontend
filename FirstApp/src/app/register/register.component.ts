import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../shared/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user: User=new User("","","","","",0);
  message:any;

  constructor(public service:RegisterService) { }
  
  ngOnInit() {
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
      }

}
