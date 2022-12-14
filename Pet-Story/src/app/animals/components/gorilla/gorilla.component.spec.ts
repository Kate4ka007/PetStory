import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorillaComponent } from './gorilla.component';

describe('GorillaComponent', () => {
  let component: GorillaComponent;
  let fixture: ComponentFixture<GorillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
