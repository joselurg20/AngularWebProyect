import { Component, OnInit, ViewChild, ElementRef, NgModule } from
  '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INote } from '../../model/INote';
import { SharedModule } from '../../components/SharedModule';
import { HighlightDirective } from
  '../../directives/highlight.directive';
import { NotesService } from '../../services/notes.service';
@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, HighlightDirective],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('colorpicker') cp!: ElementRef;
  public color: string = '#fff';
  public page = 'Inicio';
  public notes: INote[] = [
    { title: 'Nota1', descripcion: "Hola Mundo" },
    { title: 'Nota2', descripcion: "Hello World" },
  ];
  constructor(public notesS: NotesService) { }
  ngOnInit(): void {
  }
  refresh() {
    location.reload();
  }
  cambiaCorlor($event: any) {
    this.color = $event.target.value;
  } public removingNote($event: INote) {
    console.log("Elminando Nota");
    this.notesS.removeNote($event.id)
  }
  public editingNote($event: INote) {
    console.log("Editando Nota");
    console.log($event);
  }
  trackByNotes(index: number, item: INote) {
    return item.id;
  }
}