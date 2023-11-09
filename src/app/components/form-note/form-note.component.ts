import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [CommonModule,FormNoteComponent],
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent {

}
