import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Login } from '../../dto/loginDto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alertMessageName: string = 'This field is required!!';
  alertMessagePassword: string = 'Please provide password!!';
  hide = true;
  constructor(private service:UserServiceService , private snackBar:MatSnackBar) { }

  login: Login = new Login("","");
  message:any;

  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email,]),
    password: new FormControl('',[Validators.required , Validators.minLength(6),])
  })

  ngOnInit(): void {
    this.loginNow();
  }
  
  public loginNow(){
    let resp = this.service.doLogin(this.login);
    resp.subscribe((data)=>this.message=data);
  }

  public openSnackBar(message , action)
  {
    let snackBar = this.snackBar.open(message , action);
  }
}


  


