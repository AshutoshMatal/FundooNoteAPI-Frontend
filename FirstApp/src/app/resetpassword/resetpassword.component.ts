import { Component, OnInit } from '@angular/core';
import { ResetpasswordService } from '../shared/resetpassword.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(public service:ResetpasswordService) { }
  
  

  ngOnInit(): void {
  }

}
