import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from "./core/app.routing.module";

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SamplesPageComponent } from './pages/samples-page/samples-page.component';
import { SampleListComponent } from './components/sample-list/sample-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SamplesPageComponent,
    SampleListComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
