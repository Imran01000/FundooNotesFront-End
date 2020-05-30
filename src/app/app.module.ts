import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';
import { NoteComponent } from '../app/components/note/note.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconsComponent } from '../app/components/icons/icons.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NoteComponent,
    IconsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [
    UserServiceService,
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

