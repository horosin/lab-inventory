import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-users-add-page',
  templateUrl: './users-add-page.component.html',
  styleUrls: ['./users-add-page.component.css']
})
export class UsersAddPageComponent implements OnInit {

  public addForm: FormGroup;
  private loading = false;
  private submitted = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      console.log("Form invalid");
      return;
    }

    this.loading = true;
    this.userService.register(this.addForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.snackBar.open("User added", "OK", {
            duration: 2000,
          });
          this.router.navigate(['/users']);
        },
        error => {
          this.snackBar.open("Adding user failed", "OK", {
            duration: 2000,
          });
          this.loading = false;
        });
  }

}
