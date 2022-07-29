import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImagesButtonComponent } from './view-images-button.component';

describe('ViewImagesButtonComponent', () => {
  let component: ViewImagesButtonComponent;
  let fixture: ComponentFixture<ViewImagesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewImagesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewImagesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
