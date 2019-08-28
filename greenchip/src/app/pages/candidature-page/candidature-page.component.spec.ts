import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturePageComponent } from './candidature-page.component';

describe('CandidaturePageComponent', () => {
  let component: CandidaturePageComponent;
  let fixture: ComponentFixture<CandidaturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidaturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
