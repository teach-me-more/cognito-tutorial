import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  async loginWithCognito() {
    try {
      var user = await Auth.signIn(this.email.toString(), this.password.toString());
      console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
      var tokens = user.signInUserSession;
      if (tokens != null) {
        console.log('User authenticated');

        this.router.navigate(['home']);
        alert('You are logged in successfully !');

      }
    } catch (error) {
      console.log(error);
      alert('User Authentication failed');
    }
  }
}
