import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  post: any;
  invalidLogin = false;
  users:UserModel[];

  constructor(private fb: FormBuilder,private router: Router,private userService: UserService) {
    this.userService.getUsers().subscribe(response => this.users = response);
    this.loginForm = fb.group({
      'userName1': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],

    });
  }

  onlogin(data) {
    console.log(data)
    //localStorage.placeOrder=JSON.stringify(data)

    
    if (this.loginForm.invalid) {
      return;
    }

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === this.userName1 && this.users[i].password === this.password) {
        this.router.navigate(['/uploadmedia']);
        localStorage.setItem("userId", this.users[i].id.toString());
        this.userService.firstName = this.users[i].fname;
        this.userService.username = this.users[i].username;
        this.userService.email = this.users[i].email;
        this.userService.id = this.users[i].id;
      } 
      else {
        this.invalidLogin = true;
      }
    }
    


  }
}
