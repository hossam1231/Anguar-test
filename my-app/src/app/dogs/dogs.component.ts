import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = [];



  @Output() messageEvent = new EventEmitter<string>();


  sendMessage(dog:any) {
    console.log("message sent");
    this.messageEvent.emit(dog);
  }

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }



  getDogs(): void {
    this.dogService.getDogs()
    .subscribe((response:any[]) => {
     // @ts-ignore
     console.log(response.message);
       // @ts-ignore
    const DogArray = Object.keys(response.message);
    // @ts-ignore
     this.dogs = DogArray
    });
  }
}

