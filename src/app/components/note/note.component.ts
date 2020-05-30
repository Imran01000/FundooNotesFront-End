import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/dto/noteDto';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private service: NoteService , private snackBar: MatSnackBar) { }
  note: Note = new Note();
  open:boolean = false;

  title = new FormControl();
  description = new FormControl();

  ngOnInit(): void {
  }

  openNote(){
    this.open = true;
  }
  closeNote(){
    this.open = false;
  }
  addNoteNow(){
    this.note.title = this.title.value;
    this.note.description = this.description.value;
    this.service.addNote(this.note).subscribe(
      (response: any) => {
        this.snackBar.open("Note added", "OK", { duration: 3000 });
      },
      (error: any) => {
        this.snackBar.open("Note failed to add", "Something goes wrong", { duration: 3000 });
      }
    )
  }
}
