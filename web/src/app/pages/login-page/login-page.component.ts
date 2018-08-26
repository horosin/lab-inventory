import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  returnUrl: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(event) {
    event.preventDefault();

    let els = event.target.elements;
    let username = els[0].value;
    let password = els[1].value;

    this.authService.login(username, password).subscribe(res => {
      this.router.navigate([this.returnUrl]);
    });
  }

}
