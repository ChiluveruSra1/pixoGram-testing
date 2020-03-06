import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  u=new Register('','','','','','','')

  ngOnInit(): void {
  }

  registerForm: FormGroup;
  fname:String=""
  lname:String=""
  username: string=""
  dob: string=""
  email: string=""
  password:string=""
  profilepic:string=""
 

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      'fname': ['', [Validators.required, Validators.minLength(3)]],
      'lname': ['', [Validators.required, Validators.minLength(3)]],
      'username': ['', [Validators.required, Validators.minLength(3)]],
      'dob': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required]],
      'confirmpassword': ['', [Validators.required]]
    /* },
    { 
      validators: this.password1.bind(this)
    }); */

  },{
      validator: this.MustMatch.bind(this)
  });
    
  }

  onRegister(data) {
    console.log(data +"registered")
  }

  upload() {
    console.log("registered")
  }

  MustMatch(registerForm: FormGroup) {
    const { value: password1 } = registerForm.get('password');
    const { value: confirmPassword } = registerForm.get('confirmpassword');
    return password1 === confirmPassword ? null : { passwordNotMatch: true };
  }


 /*  MustMatch(controlName: string, matchingControlName: string) {
    return (registerForm: FormGroup) => {
        const control = registerForm.controls[controlName];
        const matchingControl = registerForm.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    } 

} */
}
