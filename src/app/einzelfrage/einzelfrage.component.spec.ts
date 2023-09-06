import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelfrageComponent } from './einzelfrage.component';

describe('EinzelfrageComponent', () => {
  let component: EinzelfrageComponent;
  let fixture: ComponentFixture<EinzelfrageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EinzelfrageComponent]
    });
    fixture = TestBed.createComponent(EinzelfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
