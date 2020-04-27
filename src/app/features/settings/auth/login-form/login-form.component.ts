import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  formErrors: any;

  constructor(private formBuilder: FormBuilder) {

    this.formErrors = {
      username: {},
      password: {}
    };
    this.form = this.formBuilder.group({
      username: ['r@g.com', Validators.required],
      password: ['rsking', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
  }

  onLoginFormValuesChanged() {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      this.formErrors[field] = {};
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }

}
