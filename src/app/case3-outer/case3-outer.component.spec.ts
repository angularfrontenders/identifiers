import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case3OuterComponent } from './case3-outer.component';

describe('Case3OuterComponent', () => {
  let component: Case3OuterComponent;
  let fixture: ComponentFixture<Case3OuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case3OuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case3OuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
