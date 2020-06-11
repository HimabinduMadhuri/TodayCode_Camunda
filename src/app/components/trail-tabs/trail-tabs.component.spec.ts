import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailTabsComponent } from './trail-tabs.component';

describe('TrailTabsComponent', () => {
  let component: TrailTabsComponent;
  let fixture: ComponentFixture<TrailTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
