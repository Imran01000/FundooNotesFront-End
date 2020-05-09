import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  alertMessageName: string = 'This field is required!!';
  alertMessagePassword: string = 'Please set your password!!';
  alertMessageConfirm: string = 'Please confirm your password!!';
  alertMessageEmail: string = 'Email missing!!';
  alertMessageContactNo: string = 'Please provide your contact!!';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
       this.formGroup = this.formBuilder.group({
      'firstname':[null,[Validators.required]],
      'lastname':[null,[Validators.required]],
      'email':[null,[Validators.required]],
      'password':[null,[Validators.required]],
      'confirmpassword':[null,[Validators.required]],
      'contactno':[null,[Validators.required]]
    });
  }

}
