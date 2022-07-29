import { Component, OnInit, AfterViewInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { DogsComponent } from 'src/app/dogs/dogs.component';
@Component({
  selector: 'app-dog-breed-dropdown',
  templateUrl: './dog-breed-dropdown.component.html',
  styleUrls: ['./dog-breed-dropdown.component.css']
})
export class DogBreedDropdownComponent implements AfterViewInit {
  showDiv = {
   dropdown: false,
  }

@ViewChild(DogsComponent) child : any  ;

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
