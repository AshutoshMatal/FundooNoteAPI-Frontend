import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../shared/dashboard-data.service';
import { SearchBarService } from '../shared/search-bar.service';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search: string;
  gridIcon: any = "view_stream"
  labels: any;
  isMenuOpen = true;
  
  title: any;
  constructor(
    private dashboardDataService: DashboardDataService,
    private searchBarService: SearchBarService,
    private router: Router,
    private httpService: ServiceService,

  ) { }

  ngOnInit(): void {
  }

  sideBarToggle() {
    console.log('On toolbar Toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }
  searchbar() {
    this.searchBarService.searchMessage(this.search);
  }
  
  gridAndList() {
    if (this.gridIcon === 'view_stream') {
      this.gridIcon = 'dashboard';
      console.log(this.gridIcon)
      this.dashboardDataService.viewChanger('column wrap')
    } else {
      this.gridIcon = "view_stream";
      console.log(this.gridIcon)
      this.dashboardDataService.viewChanger('row wrap')
    }
  }
  notes() {
    this.router.navigate(['dashboard', 'createnote']);

  }
  
  Signout() {
    this.router.navigate(['login']);
  }

}