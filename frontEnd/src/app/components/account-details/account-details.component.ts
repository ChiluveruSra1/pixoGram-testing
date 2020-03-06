import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' 
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  
  updateForm: FormGroup
  username:String;
  password:String;
  confirmpassword: String;
  email: String;

  constructor(private formBuilder: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group(
      {
        'username': ['', [Validators.required, Validators.minLength(3)]],
        'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}') ]],
        'email': [null, [Validators.required, Validators.minLength(3)]],
        'confirmpassword':['',[Validators.required]]
      },
      { 
        validators: this.password1.bind(this)
      }
    );
  }
  password1(registerForm: FormGroup) {
    const { value: password } = registerForm.get('password');
    const { value: confirmPassword } = registerForm.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  updateDetails(data){
    console.log(data);
  }

}
