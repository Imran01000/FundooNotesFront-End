import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../dto/registrationDto';
import { Login } from '../dto/loginDto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private httpUrl: "http://localhost:8082/user";
  
  constructor( private http: HttpClient ) { }

 doRegistration(registration : Registration): Observable<any>
  {
    return this.http.post("http://localhost:8082/user/registration", registration);
  }

 doLogin(login : Login): Observable<any>
  {
    return this.http.post("http://localhost:8082/user/login", login);
  }  

 forgetPassword(forget)
  {
    return this.http.post(this.httpUrl+'/forgetPassword', forget , {responseType:'text' as 'json'});
  }
 resetPassword(forget)
  {
    return this.http.post(this.httpUrl+'/resetPassword', forget , {responseType:'text' as 'json'});
  }
}
