import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByDepartmentComponent } from './employee-by-department.component';

describe('EmployeeByDepartmentComponent', () => {
  let component: EmployeeByDepartmentComponent;
  let fixture: ComponentFixture<EmployeeByDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeByDepartmentComponent]
    });
    fixture = TestBed.createComponent(EmployeeByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
