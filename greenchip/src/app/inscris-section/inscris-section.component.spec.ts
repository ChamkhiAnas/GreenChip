import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrisSectionComponent } from './inscris-section.component';

describe('InscrisSectionComponent', () => {
  let component: InscrisSectionComponent;
  let fixture: ComponentFixture<InscrisSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrisSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
