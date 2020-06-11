import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindACaseComponent } from './find-a-case.component';

describe('FindACaseComponent', () => {
  let component: FindACaseComponent;
  let fixture: ComponentFixture<FindACaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindACaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindACaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
