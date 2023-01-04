import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaInfoComponent } from './panda-info.component';

describe('PandaInfoComponent', () => {
  let component: PandaInfoComponent;
  let fixture: ComponentFixture<PandaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
