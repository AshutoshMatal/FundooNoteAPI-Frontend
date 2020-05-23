import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../shared/service.service';
import { NoteDTO } from '../dto/notedto';
import { CardsComponent } from '../cards/cards.component';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @ViewChild(CardsComponent) child: { getNotes: () => void; };

  data: any[];

  note: NoteDTO = new NoteDTO("","");
  message: any;

  title = new FormControl('', [Validators.required, Validators.minLength(2)]);
  content = new FormControl('', [Validators.required, Validators.minLength(2)]);

  noteFormGroup = new FormGroup({
    title: this.title,
    content: this.content
  });
  
  constructor(private service: ServiceService, private matsnackBar: MatSnackBar, ) { }
  flag = false;
  listOfNotes=[]

  ngOnInit(): void {
  }
  showNote() {

    this.flag = !this.flag;
  }
  createNote() {
      let response = this.service.addNote(new NoteDTO(this.noteFormGroup.get('title').value,
        this.noteFormGroup.get('content').value));
      response.subscribe((data) => {
       // if (data.toString().toLowerCase().search("successfully") != -1) {
         // this.service.showNotes().subscribe(data => this.listOfNotes = data);
          //   this.listOfNotes.forEach(data => console.log("title : " + data.title + "  content : " + "  " + data.content));
        //    this.sendOutput.emit(this.listOfNotes);
          
        //  } else {
         // this.child.getNotes();
          console.log(data);
          this.matsnackBar.open(this.message = "Not added successfully !!!", this.message.action, {
            duration: 5000,
            verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
          })
        
      });
    }
}
