import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { DogBreedDropdownComponent } from './components/dropdown/dog-breed-dropdown/dog-breed-dropdown.component';

@Component({
  selector: 'app-root',
  // tag used to embed component
  template:`<app-body></app-body>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showDiv = {
   dropdown: false,
  }

@ViewChild(DogBreedDropdownComponent) child : any  ;

@Output() messageEvent1 = new EventEmitter<string>();


sendMessage(message:any) {
  console.log("message sent");
  this.messageEvent1.emit(this.message);
}

  constructor() { }

  ngAfterViewInit(): void {
this.message = this.child.message;
  }

  message : string = "default";

  receiveMessage($event: any) {
    this.message = $event;
    this.sendMessage(this.message)
  }

}
