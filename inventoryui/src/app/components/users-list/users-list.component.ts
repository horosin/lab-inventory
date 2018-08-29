import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { UsersListDataSource } from './users-list-datasource';
import { UserService } from '../../service/user.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsersListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'created', 'actions'];

  constructor(
    private service: UserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() : void {
    this.dataSource = new UsersListDataSource(this.service, this.paginator, this.sort);

  }

  removeItem(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        text: 'Are you sure?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.service.remove(id).subscribe(
        res => {
          this.snackBar.open("Succesfully deleted.");
          this.refreshData();
        },
        error => {
          this.snackBar.open("Deleting failed.");
        }
      );

    });
  }
}
