import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email:string;
  password:string;
  givenName:string;
  familyName:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    try {
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          given_name: this.givenName,
          family_name: this.familyName
        }
      });
      console.log({ user });
      alert('User signup completed , please check verify your email.');
      this.router.navigate(['login']);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

}
