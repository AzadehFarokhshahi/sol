import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecintvComponent } from './secintv.component';

describe('SecintvComponent', () => {
  let component: SecintvComponent;
  let fixture: ComponentFixture<SecintvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecintvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecintvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
