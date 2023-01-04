import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocodileInfoComponent } from './crocodile-info.component';

describe('CrocodileInfoComponent', () => {
  let component: CrocodileInfoComponent;
  let fixture: ComponentFixture<CrocodileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrocodileInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrocodileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
