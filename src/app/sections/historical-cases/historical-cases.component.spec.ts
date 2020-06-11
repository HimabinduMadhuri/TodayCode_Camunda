import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalCasesComponent } from './historical-cases.component';

describe('HistoricalCasesComponent', () => {
  let component: HistoricalCasesComponent;
  let fixture: ComponentFixture<HistoricalCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
