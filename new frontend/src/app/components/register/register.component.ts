import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerSuccess = false;

  registerForm: FormGroup;
  fname:String
  lname:String
  username: String
  dob: String
  email: String
  password:String
  confirmpassword:String
  profilepic:String
  submitted:boolean=false
  file: File
 

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'fname': [null, [Validators.required, Validators.minLength(3)]],
      'lname': [null, [Validators.required, Validators.minLength(3)]],
      'username': [null, [Validators.required, Validators.minLength(3)]],
      'dob': [null, [Validators.required, Validators.minLength(3)]],
      'email': [null, [Validators.required, Validators.minLength(3)]],
      'password': [null, [Validators.required, Validators.minLength(8),Validators.maxLength(12), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]],
      'confirmpassword':[null, [Validators.required]],
      'profilepic':[null]
    },
    { 
      validators: this.password1.bind(this)
    }
    );
  }

  onRegister() {
    this.submitted = true;
    let user = new UserModel(this.fname, this.lname, this.username, this.password, this.email,this.dob,this.profilepic);
    console.log("reg comp")
    console.log(user)
    this.userService.createUser(user).subscribe(
      //x=>this.registerForm=x); 
      data => console.log(user), error => console.log(error));
    this.registerSuccess = true;
  }

  upload() {
    console.log("registered")
  }

  password1(registerForm: FormGroup) {
    const { value: password } = registerForm.get('password');
    const { value: confirmPassword } = registerForm.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  fileChange(event: any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }



}
