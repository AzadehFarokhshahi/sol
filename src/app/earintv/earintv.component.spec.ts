import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarintvComponent } from './earintv.component';

describe('EarintvComponent', () => {
  let component: EarintvComponent;
  let fixture: ComponentFixture<EarintvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarintvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarintvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
