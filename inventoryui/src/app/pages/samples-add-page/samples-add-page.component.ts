import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../service/sample.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-samples-add-page',
  templateUrl: './samples-add-page.component.html',
  styleUrls: ['./samples-add-page.component.css']
})
export class SamplesAddPageComponent implements OnInit {

  public addForm: FormGroup;
  private loading = false;
  private submitted = false;

  constructor(
    private sampleService: SampleService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
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
    this.sampleService.add(this.addForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.snackBar.open("Sample added", "OK", {
            duration: 2000,
          });
          this.router.navigate(['/samples']);
        },
        error => {
          this.snackBar.open("Adding sample failed", "OK", {
            duration: 2000,
          });
          this.loading = false;
        });
  }

}
