import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Forget } from '../../dto/forgetDto';
import { UserServiceService} from 'src/app/services/user-service.service'
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  alertMessageEmail: string = 'Please provide your email!!';
  form = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    });
  forget: Forget= new Forget("");
  constructor(private service:UserServiceService , private snakBar:MatSnackBar) { }
  message:any;

  ngOnInit(): void {
    this.forgetPasswordNow();
  }
  public forgetPasswordNow()
  {
    let resp = this.service.forgetPassword(this.forget);
    resp.subscribe((data)=>this.message=data);
  }
  
  
}
