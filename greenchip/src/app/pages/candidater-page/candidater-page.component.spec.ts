import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaterPageComponent } from './candidater-page.component';

describe('CandidaterPageComponent', () => {
  let component: CandidaterPageComponent;
  let fixture: ComponentFixture<CandidaterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidaterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
