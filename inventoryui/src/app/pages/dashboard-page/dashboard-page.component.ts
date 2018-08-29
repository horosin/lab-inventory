import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit{

  stats: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    
    this.dashboardService
      .getStats()
      .subscribe(
        stats => this.stats = stats,
        error => { console.log(error); this.stats = { users: 0, samples: 0 } }
      );

  }


}
