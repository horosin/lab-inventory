import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from "./core/app.routing.module";

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SamplesPageComponent } from './pages/samples-page/samples-page.component';
import { SampleListComponent, SampleRemoveDialog } from './components/sample-list/sample-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SamplesAddPageComponent } from './pages/samples-add-page/samples-add-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SamplesPageComponent,
    SampleListComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    SamplesAddPageComponent,
    UsersPageComponent,
    UsersListComponent,
    SampleRemoveDialog
  ],
  entryComponents: [
    SampleRemoveDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
