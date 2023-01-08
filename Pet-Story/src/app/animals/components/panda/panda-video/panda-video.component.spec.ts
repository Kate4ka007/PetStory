import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaVideoComponent } from './panda-video.component';

describe('PandaVideoComponent', () => {
  let component: PandaVideoComponent;
  let fixture: ComponentFixture<PandaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandaVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
