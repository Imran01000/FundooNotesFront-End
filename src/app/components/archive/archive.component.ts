import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  data: any[];
  @Input() note: any;

  constructor(private snackBar: MatSnackBar, private noteService: NoteService, ) { }

  ngOnInit(): void {
  }

}
