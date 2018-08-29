import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private email: string;
  private token: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  getLoggedIn(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return Boolean(currentUser);
  }

  login(email: string, password: string) {
    this.email = email;
    this.token = btoa(email + ":" + password);

    let user = {
      "email": this.email,
      "token": this.token
    }
    localStorage.setItem('currentUser', JSON.stringify(user));

    return this.http.post(environment.apiUrl + "login", {})
      .pipe(map(
        data => {
          console.log(data)
        },
        err => {
          localStorage.removeItem('currentUser')
        }
      ));
  }

  logout() {
    localStorage.removeItem('currentUser')
    location.reload();
  }
}
