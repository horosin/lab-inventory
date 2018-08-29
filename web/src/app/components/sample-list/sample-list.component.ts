import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { SampleListDataSource } from './sample-list-datasource';
import { SampleService } from '../../service/sample.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html'
})
export class SampleListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SampleListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'created', 'actions'];

  constructor(
    private sampleService: SampleService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(): void {
    this.dataSource = new SampleListDataSource(this.sampleService, this.paginator, this.sort);
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

      this.sampleService.delete(id).subscribe(
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
