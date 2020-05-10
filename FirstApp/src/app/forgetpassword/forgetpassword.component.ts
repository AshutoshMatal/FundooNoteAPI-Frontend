import { Component, OnInit } from '@angular/core';
import { ForgetpasswordService } from '../shared/forgetpassword.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(public service:ForgetpasswordService) { }

  ngOnInit(): void {
  }

}
