import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteSectionComponent } from './specialite-section.component';

describe('SpecialiteSectionComponent', () => {
  let component: SpecialiteSectionComponent;
  let fixture: ComponentFixture<SpecialiteSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
