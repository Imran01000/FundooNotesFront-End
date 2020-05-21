import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  alertMessageNewPassword: string = 'This field is required!!';
  alertMessageConfirmPassword: string = 'Please confirm your password';
  hide = true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
   'newpassword':[null,[Validators.required]],
   'confirmpassword':[null,[Validators.required]]
   });

}
}
