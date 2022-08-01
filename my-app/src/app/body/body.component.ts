import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { DogBreedDropdownComponent } from '../components/dropdown/dog-breed-dropdown/dog-breed-dropdown.component';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements AfterViewInit {
  @ViewChild(DogBreedDropdownComponent) child: any;

  @Output() messageEvent1 = new EventEmitter<string>();
  showDiv = {
    image: false,
    expandedImage: false,
    expandedImageData: '',
  };

  dogs1: any = [];
  dogsSub: any = [];

  sendMessage(message: any) {
    console.log('message sent');
    this.messageEvent1.emit(this.message);
  }

  constructor(private dogService: DogService) {}

  ngAfterViewInit(): void {
    this.message = this.child.message;
  }

  message!: string;

  message1!: string;
  // breed

  message2!: string;
  // pressed

  subBreed!: string;
  breed!: string;

  counter: number = 0;

  maxImgs!: number;

  value = this.counter;

  close() {
    if (this.breed) {
      if (this.maxImgs < this.counter) {
        this.counter = this.maxImgs;
      }
      if (this.counter === 0) {
        this.counter = this.maxImgs;
      }
    } else {
      this.counter = 0;
    }
  }

  receiveMessage($event: any) {
    this.message = $event;
    this.sendMessage(this.message);
  }

  receiveMessage1($event: any) {
    this.message1 = $event;
    this.breed = this.message1;
    this.counter = 0;
    this.subBreed = '';
    this.getDogSubBreed();
    this.dogs1 = [];
  }

  receiveMessage2($event: string) {
    this.message2 = $event;
    if (this.counter == 0) {
      this.counter++;
    }
    this.getDog();
  }

  incrementCounter() {
    if (this.breed) {
      this.counter++;
    }
  }

  decrementCounter() {
    if (this.breed) {
      if (this.counter > 0) {
        this.counter--;
      }
    }
  }

  closeModal() {
    this.showDiv.expandedImage = false;
  }

  // @ts-ignore
  getDog(): void {
    console.log('get dog');
    this.dogService
      .getDog(this.breed, this.counter, this.subBreed)
      .subscribe((response: any[]) => {
        // @ts-ignore
        console.log(response);
        // @ts-ignore
        const DogArray = response.message;
        // @ts-ignore
        this.dogs1 = DogArray;
      });
  }

  getDogNumber(): void {
    console.log('get dog number ');
    this.dogService
      .getDogNumber(this.breed, this.subBreed)
      .subscribe((response: any[]) => {
        // @ts-ignore
        console.log(response);
        // @ts-ignore
        const DogNum = response.message.length;
        // @ts-ignore
        this.maxImgs = DogNum;
      });
  }

  expandImage(dog1: string) {
    console.log('hi');
    this.showDiv.expandedImageData = dog1;
    this.showDiv.expandedImage = true;
  }

  getDogSubBreed(): void {
    console.log('get dog sub breed');
    this.getDogNumber();
    this.dogService.getDogSubBreed(this.breed).subscribe((response: any[]) => {
      // @ts-ignore
      const DogArray = response.message;
      // @ts-ignore
      this.dogsSub = DogArray;
    });
  }

  addSubBreed(dog: string) {
    // @ts-ignore
    if (this.subBreed != dog) {
      this.subBreed = dog;
      console.log('subBreed: ' + this.subBreed);
      this.getDogNumber();
    } else {
      this.subBreed = '';
    }
  }
}
