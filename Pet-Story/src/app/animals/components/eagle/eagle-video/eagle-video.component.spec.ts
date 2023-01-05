import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagleVideoComponent } from './eagle-video.component';

describe('EagleVideoComponent', () => {
  let component: EagleVideoComponent;
  let fixture: ComponentFixture<EagleVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagleVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
