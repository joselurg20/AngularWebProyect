import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { ButtonComponent } from "./components/button/button.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        NoteComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonComponent,
        NavbarComponent
    ]
})
export class AppModule { }
