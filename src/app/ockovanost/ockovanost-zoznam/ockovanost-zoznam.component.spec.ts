import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OckovanostZoznamComponent } from './ockovanost-zoznam.component';

describe('OckovanostZoznamComponent', () => {
  let component: OckovanostZoznamComponent;
  let fixture: ComponentFixture<OckovanostZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OckovanostZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OckovanostZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
