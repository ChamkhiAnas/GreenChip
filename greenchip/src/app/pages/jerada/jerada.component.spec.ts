import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeradaComponent } from './jerada.component';

describe('JeradaComponent', () => {
  let component: JeradaComponent;
  let fixture: ComponentFixture<JeradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
