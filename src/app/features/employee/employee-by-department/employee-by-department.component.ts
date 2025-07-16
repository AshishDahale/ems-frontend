import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Employee } from 'src/app/shared/models/employee.model';
import { Department } from 'src/app/shared/models/department.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-department',
  templateUrl: './employee-by-department.component.html',
  styleUrls: ['./employee-by-department.component.scss']
})
export class EmployeeByDepartmentComponent implements OnInit {
  departmentId: number = 0;
  departments: Department[] = [];
  employees: Employee[] = [];
  displayedColumns = ['empCode', 'name', 'email', 'position', 'actions'];

  constructor(
    private empService: EmployeeService,
    private deptService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deptService.getAll().subscribe(res => {
      this.departments = res.data.content;
    });
  }

  search() {
    if (!this.departmentId) {
      this.employees = [];
      return;
    }

    this.empService.getByDeptId(this.departmentId).subscribe(res => {
      this.employees = res.data;
    });
  }

  view(emp: Employee) {
    this.router.navigate(['/employee', emp.id]);
  }
}
