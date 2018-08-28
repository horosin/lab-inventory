import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UsersListDataSource } from './users-list-datasource';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsersListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'created'];

  constructor(private sampleService: UserService) {}

  ngOnInit() {
    this.dataSource = new UsersListDataSource(this.sampleService, this.paginator, this.sort);
  }
}
