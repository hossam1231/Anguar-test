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
dogsSub: any = [];



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

counter: number = 0;

  receiveMessage($event: any) {
    this.message = $event;
    this.sendMessage(this.message)
  }


  receiveMessage1($event: any) {
    this.message1 = $event;
    this.getDogSubBreed();

  }

  receiveMessage2($event: any) {
    this.message2 = $event;
    this.getDog();
  }

incrementCounter() {
this.counter = this.counter + 1;
}

decrementCounter() {
  if (this.counter > 0){
this.counter = this.counter - 1;
  }
}


  // @ts-ignore
  getDog(): void {
    console.log("get dog")
    this.dogService.getDog(this.message1,this.counter)
    .subscribe((response:any[]) => {
     // @ts-ignore
     console.log(response);
       // @ts-ignore
    const DogArray = response.message;
    // @ts-ignore
     this.dogs1 = DogArray
    });
  }

  getDogSubBreed(): void {
    console.log("get dog")
    this.dogService.getDogSubBreed(this.message1,)
    .subscribe((response:any[]) => {
     // @ts-ignore
     console.log(response);
       // @ts-ignore
    const DogArray = response.message;
    // @ts-ignore
     this.dogsSub = DogArray
    });
  }

  addSubBreed(dog:any){
this.message1=this.message1+"/"+dog;
console.log(this.message1)
  }



}
