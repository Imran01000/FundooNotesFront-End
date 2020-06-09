import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../dto/noteDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  private httpUrl= "http://localhost:8082/user/";

  headers = new HttpHeaders({'Content-Type' : 'application/json' , token: localStorage.getItem("token")});

  addNote(addNote : Note): Observable<any>
  {
    console.log(this.headers);
     return this.http.post(this.httpUrl+'addnote' , addNote , {headers : new HttpHeaders({ 'token' : localStorage.getItem("token")})});
  }

  getNotes(): Observable<any>
  {
    console.log(this.headers);
     return this.http.get("http://localhost:8082/user/showall" ,{
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  }

  setArchive(url , vary:any)
  {
    return this.http.put(this.httpUrl+url,vary,{
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  } 

  getRequestNote(url): Observable<any> {
    return this.http.get(this.httpUrl + url, {
      headers: new HttpHeaders().set("jwt_token", localStorage.getItem("token")),
      observe: 'response'
    });
  }
  
   deleteNote(noteId: number) {
    return this.http.delete(this.httpUrl + 'delete/' + noteId, {
      headers: new HttpHeaders().set("jwt_token", localStorage.getItem("token")),
      observe: 'response'
    });
  }

  addColor(url, vary: any) {
    return this.http.put(this.httpUrl + url, vary, {
      headers: new HttpHeaders().set("jwt_token", localStorage.getItem("token")),
      observe: 'response'
    });
  }
}
