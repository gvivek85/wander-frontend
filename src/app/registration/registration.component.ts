import { Component, OnInit } from '@angular/core';
import { NgForm, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  minPw = 8;
  user = new User();
  msg = '';
  accessToken = '';
  constructor(private _regService: RegistrationService, private _route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/.+@.+\..+/)]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registrationForm.controls[controlName].hasError(errorName);
  }

  onPasswordInput() {
    if (this.registrationForm.hasError('passwordMismatch'))
      this.confirmPassword.setErrors([{ 'passwordMismatch': true }]);
    else
      this.confirmPassword.setErrors(null);
  }

  /* Shorthands for form controls (used from within template) */
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

  registerUser(registrationForm) {
  
      this.user = registrationForm;
      this._regService.registerUser(registrationForm).subscribe(
        data => {
          if (null != data.responseCode && data.responseCode == 1004) {
            console.log('exception occured');
            this.msg = data.responseMsg;
          } else {
           //this.msg = "User Registered Successfully.";
            this._route.navigate(['/']);
          }
        },
        error => {
          console.log('exception occured');
          this.msg = "Invalid Username/Password..";
        });

    
  }
}
