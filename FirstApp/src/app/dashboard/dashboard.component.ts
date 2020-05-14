import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../shared/dashboard-data.service';
import { SearchBarService } from '../shared/search-bar.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search: string;
  gridIcon: any = "view_stream"
  constructor(
    private dashboardDataService: DashboardDataService,
    private searchBarService: SearchBarService
  ) { }

  ngOnInit(): void {
  }
  searchbar() {
    this.searchBarService.searchMessage(this.search);
  }
  
}
