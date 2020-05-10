import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  alertMessageEmail: string = 'Please provide your email!!';

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  
  createForm(){
    this.formGroup = this.formBuilder.group({
      'email':[null,[Validators.required]]
  });
}
}
