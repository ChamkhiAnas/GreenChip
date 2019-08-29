import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OujdaComponent } from './oujda.component';

describe('OujdaComponent', () => {
  let component: OujdaComponent;
  let fixture: ComponentFixture<OujdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OujdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OujdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
