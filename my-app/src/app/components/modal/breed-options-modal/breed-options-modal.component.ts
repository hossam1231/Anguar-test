import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed-options-modal',
  templateUrl: './breed-options-modal.component.html',
  styleUrls: ['./breed-options-modal.component.css']
})
export class BreedOptionsModalComponent implements OnInit {
  showDiv = {
    modal: false,
   }


   
  constructor() { }

  ngOnInit(): void {
  }

}
