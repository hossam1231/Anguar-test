import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedOptionsModalComponent } from './breed-options-modal.component';

describe('BreedOptionsModalComponent', () => {
  let component: BreedOptionsModalComponent;
  let fixture: ComponentFixture<BreedOptionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedOptionsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedOptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
