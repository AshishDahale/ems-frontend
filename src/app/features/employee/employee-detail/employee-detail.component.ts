import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Employee } from 'src/app/shared/models/employee.model';
import { Department } from 'src/app/shared/models/department.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee = {} as Employee;
  departments: Department[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private deptService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Use observable instead of snapshot
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadEmployee(+id);
      }
    });

    // Load departments always
    this.deptService.getAll().subscribe(res => {
      this.departments = res.data?.content || [];
    });
  }

  loadEmployee(id: number): void {
    this.empService.getOne(id).subscribe(res => {
      this.employee = res.data;
      this.isLoading = false;
    });
  }

  // update(): void {
  //   this.empService.update(this.employee).subscribe(() => {
  //     alert('Employee updated!');
  //   });
  // }
  update(): void {
  this.empService.update(this.employee).subscribe(() => {
    alert('Employee updated!');
    this.router.navigate(['/employee-by-department']); // ✅ redirect after update
  });
  }

  delete(): void {
    if (confirm('Delete this employee?')) {
      this.empService.delete(this.employee.id!).subscribe(() => {
        alert('Deleted!');
        this.router.navigate(['/employee-by-department']);
      });
    }
  }

  goBack(): void {
  this.router.navigate(['/employee-by-department']);
  }
}
