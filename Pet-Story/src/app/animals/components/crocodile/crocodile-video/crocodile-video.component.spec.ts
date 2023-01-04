import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocodileVideoComponent } from './crocodile-video.component';

describe('CrocodileVideoComponent', () => {
  let component: CrocodileVideoComponent;
  let fixture: ComponentFixture<CrocodileVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrocodileVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrocodileVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
