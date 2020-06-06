import { Injectable } from '@angular/core';
import { NoteService } from './note.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private transferAllNotes = new BehaviorSubject([]);
  allNotes = this.transferAllNotes.asObservable();
  
  constructor(private noteService:NoteService) { }

  createBroadcast() {
    this.noteService.getRequestNote('getevery').subscribe(
      response => {
        this.transferAllNotes.next(response.body)
      }
    )
  }

  updateBroadcast() {
    this.noteService.getRequestNote('getevery').subscribe(
      response => {
        console.log("Display Notes", response);
        this.transferAllNotes.next(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
