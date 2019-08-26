import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoudaSectionComponent } from './douda-section.component';

describe('DoudaSectionComponent', () => {
  let component: DoudaSectionComponent;
  let fixture: ComponentFixture<DoudaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoudaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoudaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
