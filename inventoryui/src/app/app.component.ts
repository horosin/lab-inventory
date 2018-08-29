import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  userHasRole(role: String): Boolean {
    const roles = JSON.parse(localStorage.getItem('roles'));
    return roles !== null && roles.includes(role);
  }

  isLoggedIn() {
    return this.authService.getLoggedIn();
  }
}
