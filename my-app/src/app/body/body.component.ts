import { Component, OnInit,Input, AfterViewInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { DogBreedDropdownComponent } from '../components/dropdown/dog-breed-dropdown/dog-breed-dropdown.component';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {


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

  message!: string;

  message1! : string
  // breed

  message2! : string
  // pressed



  receiveMessage($event: any) {
    this.message = $event;
    this.sendMessage(this.message)
  }


  receiveMessage1($event: any) {
    this.message1 = $event;
    this.getDog();

  }

  receiveMessage2($event: any) {
    this.message2 = $event;
    this.getDog();
  }

  // @ts-ignore
  getDog(): void {
    console.log("get dog")
    this.dogService.getDog(this.message1)
    .subscribe((response:any[]) => {
     // @ts-ignore
     console.log(response);
       // @ts-ignore
    const DogArray = Object.keys(response.message);
    // @ts-ignore
     this.dogs1 = DogArray
    });
  }

}
