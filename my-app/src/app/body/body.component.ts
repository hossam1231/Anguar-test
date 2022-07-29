import { Component, OnInit,Input, AfterViewInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { DogBreedDropdownComponent } from '../components/dropdown/dog-breed-dropdown/dog-breed-dropdown.component';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {
  showDiv = {
   dropdown: false,
  }

@ViewChild(DogBreedDropdownComponent) child : any  ;

@Output() messageEvent1 = new EventEmitter<string>();

dogs1: any = [];

sendMessage(message:any) {
  console.log("message sent");
  this.messageEvent1.emit(this.message);
}

  constructor(private dogService: DogService) { }

  ngAfterViewInit(): void {
this.message = this.child.message;
  }

  message : string = "default";

  message1 : string = "default";
  // breed

  message2 : string = "default";
  // pressed



  receiveMessage($event: any) {
    this.message = $event;
    this.sendMessage(this.message)
  }

  url: string = "https://dog.ceo/api/breed/" + this.message1 + "/images/random";

  getDog(): void {
    console.log("get dog")
    this.dogService.getDog(this.url)
    .subscribe((response:any[]) => {
     // @ts-ignore
     console.log(response.message);
       // @ts-ignore
    const DogArray = Object.keys(response.message);
    // @ts-ignore
     this.dogs1 = DogArray
    });
  }


  receiveMessage1($event: any) {
    this.message1 = $event;
    this.getDog();

  }

  receiveMessage2($event: any) {
    this.message2 = $event;
    this.sendMessage(this.message)
  }



}
