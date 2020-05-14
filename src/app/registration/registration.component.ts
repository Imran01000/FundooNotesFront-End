import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Registration } from './registration';
import { RegistrationService } from '../registration.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  alertMessageName: string = 'This field is required!!';
  alertMessagePassword: string = 'Please set your password!!';
  alertMessageConfirm: string = 'Please confirm your password!!';
  alertMessageEmail: string = 'Email missing!!';
  alertMessageContactNo: string = 'Please provide your contact!!';
  hide = true;

  form = new FormGroup({
    firstName: new FormControl('',[Validators.required , Validators.pattern('[A-Z][a-z]*')]),
    lastName: new FormControl('',[Validators.required , Validators.pattern('[A-Z][a-z]*')]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password:  new FormControl('',[Validators.required , Validators.minLength(6)]),
    confirmPassword: new FormControl('',Validators.required),
    contactNo: new FormControl('',[Validators.required , Validators.pattern('[7-9][0-9]{9}')])
  });

  constructor(private service:RegistrationService , private snackBar:MatSnackBar) { }
  registration: Registration = new Registration("","","","","");
  message:any;

  ngOnInit(): void 
  {
    this.registerNow();
  }
  
  public registerNow()
  {
    let resp = this.service.doRegistration(this.registration);
    resp.subscribe((data)=>this.message=data);
  }

  public openSnackBar(message)
  {
    this.snackBar.open(message);
  }

}
