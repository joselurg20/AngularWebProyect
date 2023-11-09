import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { ButtonComponent } from "./components/button/button.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NotesService } from './services/notes.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [NotesService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonComponent,
        NavbarComponent
        ],
})
export class AppModule { }
