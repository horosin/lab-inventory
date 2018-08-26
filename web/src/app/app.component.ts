import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.getLoggedIn();
  }
}
