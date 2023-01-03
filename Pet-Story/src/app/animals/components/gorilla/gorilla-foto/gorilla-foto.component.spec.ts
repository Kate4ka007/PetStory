import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorillaFotoComponent } from './gorilla-foto.component';

describe('GorillaFotoComponent', () => {
  let component: GorillaFotoComponent;
  let fixture: ComponentFixture<GorillaFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorillaFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorillaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
