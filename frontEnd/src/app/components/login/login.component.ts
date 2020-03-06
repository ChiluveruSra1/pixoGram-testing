import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  loginForm: FormGroup;
  userName1: string = "";
  password: string = "";

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      'userName1': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  onlogin(data) {
    console.log(data)
    //localStorage.placeOrder=JSON.stringify(data)

    if (localStorage.login == undefined) {
      var users = [];
      users.push(data)
      localStorage.order = JSON.stringify(users)
    }
    else {
      var newUsers = JSON.parse(localStorage.login)
      newUsers.push(data)
      localStorage.order = JSON.stringify(newUsers)
    }

  }
}
