import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OckovanostFormularComponent } from './ockovanost-formular.component';

describe('OckovanostFormularComponent', () => {
  let component: OckovanostFormularComponent;
  let fixture: ComponentFixture<OckovanostFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OckovanostFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OckovanostFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
