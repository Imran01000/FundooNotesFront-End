import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  data: any[];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this. getAllNotes();
  }
  getAllNotes() {
    this.noteService.getNotes().subscribe(
      response => {
        console.log(response)
        this.data = response['body']
        console.log("info", this.data)


      },
      error => {
        console.log('Error', error);
      }
    )
  }
}
