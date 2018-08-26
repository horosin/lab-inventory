import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { SamplesPageComponent } from '../pages/samples-page/samples-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component'
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'samples', component: SamplesPageComponent, canActivate: [AuthGuard] },
    { path: '', component: DashboardPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }