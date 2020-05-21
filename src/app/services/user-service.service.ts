import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../components/registration/registration';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private httpUrl: 'http://localhost:8082/user';
  
  constructor( private http: HttpClient ) { }

  public doRegistration(registration: Registration): Observable<Object>
  {
    return this.http.post(this.httpUrl+'/registration', registration , {responseType:'text' as 'json'});
  }  

  public doLogin(login)
  {
    return this.http.post(this.httpUrl+'/login', login , {responseType:'text' as 'json'});
  }  

  public forgetPassword(forget)
  {
    return this.http.post(this.httpUrl+'/forgetPassword', forget , {responseType:'text' as 'json'});
  }
  public resetPassword(forget)
  {
    return this.http.post(this.httpUrl+'/resetPassword', forget , {responseType:'text' as 'json'});
  }
}
