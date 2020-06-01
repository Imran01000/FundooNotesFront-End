import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../dto/noteDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  private httpUrl: "http://localhost:8082/user";

  headers = new HttpHeaders({'Content-Type' : 'application/json' , token: localStorage.getItem("token")});

  addNote(addNote : Note): Observable<any>
  {
    console.log(this.headers);
     return this.http.post("http://localhost:8082/user/addnote" , addNote , {headers : new HttpHeaders({ 'token' : localStorage.getItem("token")})});
  }

  getNotes(): Observable<any>
  {
    console.log(this.headers);
     return this.http.get("http://localhost:8082/user/showall" ,{
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  }
}
