import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTableComponent } from './stepper-table.component';

describe('StepperTableComponent', () => {
  let component: StepperTableComponent;
  let fixture: ComponentFixture<StepperTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
