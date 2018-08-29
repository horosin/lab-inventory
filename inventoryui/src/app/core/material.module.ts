import {NgModule} from "@angular/core";

import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule,
    MatMenuModule, MatIconModule, MatDialogModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        LayoutModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        LayoutModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        MatDialogModule
    ],
})
export class CustomMaterialModule { }