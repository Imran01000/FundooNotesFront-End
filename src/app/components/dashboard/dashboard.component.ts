import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component';
import { LabelServiceService } from 'src/app/services/label-service.service';
import { LoginAndoutComponent } from '../login-andout/login-andout.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noteService:NoteService, private router:Router, 
    private dataService:DataService, private matDialog: MatDialog,
    private labelService:LabelServiceService) { }

  opened:boolean = false;
  view: boolean = false;
  grid = "row";
  labels: any[];
  ngOnInit(): void {
    this.getAllLabel()
  }

  onArchive() {
    this.router.navigate(['dashboard', 'archivenotes']);
  }

  onTrash()
  {
    this.router.navigate(['dashboard' , 'trashnotes']);
  }

  onReminder()
  {
    this.router.navigate(['dashboard' , 'reminder-notes']);
  }

  getView() {
    if (this.view == true) {
      this.view = false;
      this.grid = "row";
    }
    else {
      this.view = true;
      this.grid = "column";
    }
    this.dataService.setView(this.grid);
    console.log(this.view);
  }

  getAllLabel() {
    this.labelService.getAllLabel('getall').subscribe(
      response => {
        console.log(response)
        this.labels = response['body']
        console.log("info===label==", this.labels)
      },
      error => {
        console.log('Error', error);
      }
    )
  }

  openEditLabelDialog() {
    const dialogRef = this.matDialog.open(EditLabelsComponent,
      {
        width: "300px",
        height: "Auto"
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    });
  }

  logoutUser()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  openDailog()
  {
    this.matDialog.open(LoginAndoutComponent);
  }
  search()
  {

  }
}
