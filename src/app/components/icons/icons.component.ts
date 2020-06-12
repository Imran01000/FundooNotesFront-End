import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input() note:any;
  data:any;

  constructor(private service:NoteService , private snackBar:MatSnackBar, private router:Router) { }

  
  ngOnInit(): void {
    this.service.autoRefresh$.subscribe(
      ()=>{
        this.doArchive();
      }
    );
  }

  colorsArray = [
    [
      {
        colorDetail: "rgba(0, 0, 228,0.5)", name: "Navy"
      },
      {
        colorDetail: "rgba(0, 128, 0,0.5)", name: "Green"
      },
      {
        colorDetail: "rgba(128, 0, 128,0.5)", name: "purple"
      },
      {
        colorDetail: "rgba(255, 99, 71, 0.5)", name: "tomato"
      }
    ],
    [
      {
        colorDetail: "rgb(255, 0, 0)", name: "Orange"
      },
      {
        colorDetail: "rgb(152, 225, 255)", name: "Sky blue"
      },
      {
        colorDetail: "rgba(255, 0, 0,0.5)", name: "Red"
      },
      {
        colorDetail: "rgb(238, 130, 238)", name: "light pink"
      }

    ], [

      {
        colorDetail: "rgba(128, 0, 0,0.4)", name: "Maroon"
      },
      {
        colorDetail: "rgba(192, 192, 192,0.5)", name: "Silver"
      },
      {
        colorDetail: "rgba(255, 255, 255,1)", name: "white"
      },
       {
        colorDetail: "rgb(255, 165, 0)", name: "Dark yellow"
      }
    ]
  ]

  doArchive()
  {
    console.log("note data" ,this.note.id);
    this.data = {
      archive:true
    }
    this.service.setArchive('archive/'+this.note.id,null).subscribe(
      (response:any)=>{
        console.log("response id ", response.id);
        this.snackBar.open('Archive set' ,'OK',{duration:3000} );

      },
      (error:any)=>{
        this.snackBar.open('Archive not set' ,'Try again',{duration:3000} );
      }
    )
  }

  doDeleteNote() {
    console.log("note:", this.note);
    console.log("note data:", this.note.id);
    this.data = {
      id: this.note.id,
    }
    this.service.deleteNote(this.note.id).subscribe(
      (response: any) => {
        console.log("response : ", response.id);
        //this.service.getNotes;
        this.snackBar.open("Trashed", "Ok", { duration: 4000 });
      },
      error =>{
        this.snackBar.open("something went wrong", "Try again",{ duration: 4000 });
      }
    );
  }

  doColor(color)
  {
    console.log(color.colorCode);
    this.service.addColor('color/' + this.note.id + "?color=" + color.colorDetail, null).subscribe(
      response => {
        console.log("response : ", response);
       // this.router.navigateByUrl('http://localhost:4200/dashboard');
        this.snackBar.open("Colour Changed", "Ok", { duration: 4000 });
      },
      error => {
        this.snackBar.open("something went wrong", "Try again");
      }
    );
  }

  getArchiveNotes()
  {
    this.service.getArchiveNotes().subscribe(
      (response: any) => {
        this.snackBar.open("Trashed", "Ok", { duration: 4000 });
      }
    );
  }
}
