import {NgModule} from "@angular/core";

import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule
    ],
})
export class CustomMaterialModule { }