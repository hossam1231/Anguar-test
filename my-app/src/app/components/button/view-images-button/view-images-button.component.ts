import { Component, OnInit,Input, AfterViewInit, ViewChild,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-images-button',
  templateUrl: './view-images-button.component.html',
  styleUrls: ['./view-images-button.component.css']
})
export class ViewImagesButtonComponent implements OnInit {

  @Output() messageEvent2 = new EventEmitter<string>();


  sendMessage(message:any) {
    console.log("message sent");
    this.messageEvent2.emit("pressed");
  }

  constructor() { }

  ngOnInit(): void {
  }




}

