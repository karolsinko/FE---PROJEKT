import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OckovanostStrankaComponent } from './ockovanost-stranka.component';

describe('OckovanostStrankaComponent', () => {
  let component: OckovanostStrankaComponent;
  let fixture: ComponentFixture<OckovanostStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OckovanostStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OckovanostStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
