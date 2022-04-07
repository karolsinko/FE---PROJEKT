import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakcinaStrankaComponent } from './vakcina-stranka.component';

describe('VakcinaStrankaComponent', () => {
  let component: VakcinaStrankaComponent;
  let fixture: ComponentFixture<VakcinaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakcinaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakcinaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
