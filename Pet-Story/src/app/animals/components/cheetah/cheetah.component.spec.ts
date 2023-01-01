import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheetahComponent } from './cheetah.component';

describe('CheetahComponent', () => {
  let component: CheetahComponent;
  let fixture: ComponentFixture<CheetahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheetahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheetahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
