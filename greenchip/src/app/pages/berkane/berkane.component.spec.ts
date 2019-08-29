import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerkaneComponent } from './berkane.component';

describe('BerkaneComponent', () => {
  let component: BerkaneComponent;
  let fixture: ComponentFixture<BerkaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerkaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerkaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
