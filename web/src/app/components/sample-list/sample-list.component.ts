import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SampleListDataSource } from './sample-list-datasource';
import { SampleService } from '../../service/sample.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html'
})
export class SampleListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SampleListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'created'];

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    this.dataSource = new SampleListDataSource(this.sampleService, this.paginator, this.sort);
  }
}
