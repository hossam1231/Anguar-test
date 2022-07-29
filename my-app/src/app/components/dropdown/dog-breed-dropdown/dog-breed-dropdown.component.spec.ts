import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedDropdownComponent } from './dog-breed-dropdown.component';

describe('DogBreedDropdownComponent', () => {
  let component: DogBreedDropdownComponent;
  let fixture: ComponentFixture<DogBreedDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogBreedDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogBreedDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
