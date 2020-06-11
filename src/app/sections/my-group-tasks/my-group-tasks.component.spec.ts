import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupTasksComponent } from './my-group-tasks.component';

describe('MyGroupTasksComponent', () => {
  let component: MyGroupTasksComponent;
  let fixture: ComponentFixture<MyGroupTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGroupTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGroupTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
