import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationSectionComponent } from './formation-section.component';

describe('FormationSectionComponent', () => {
  let component: FormationSectionComponent;
  let fixture: ComponentFixture<FormationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
