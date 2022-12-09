import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonailsComponent } from './testimonails.component';

describe('TestimonailsComponent', () => {
  let component: TestimonailsComponent;
  let fixture: ComponentFixture<TestimonailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
