import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  user = new User();
  msg = '';
  accessToken = '';
  constructor(private _regService: RegistrationService, private _route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginForm) {
    this.user.username = loginForm.username;
    this.user.password = loginForm.password;

    this._regService.loginUser(this.user).subscribe(
      data => {
        if (null != data.responseCode && data.responseCode == 1004) {
          console.log('exception occured');
          this.msg = data.responseMsg;         
        } else {
          this.accessToken = data.accessToken;
          localStorage.setItem('ACCESS_TOKEN',this.accessToken);
          
          //Fetch the user details from the backend API and set it to localStorage
          this._regService.userDetails(this.accessToken).subscribe(
            data=> {
              if(data){              
                let userAuthority = data.authorities[0].authority;
                console.log('User object' + userAuthority);
                localStorage.setItem('userAuthority',userAuthority);
                localStorage.setItem('name', data.name);
                localStorage.setItem('emailId', data.email);
                this._route.navigate(['/dashboard']);
              }
            },
            error => {
              console.log('exception occured');
              this.msg = "Unable to fetch user";
            });

           
        }
      },
      error => {
        console.log('exception occured');
        this.msg = "Invalid Username/Password..";
      }
    );
  }
}
