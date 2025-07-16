import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns = ['empCode', 'name', 'email', 'position', 'salary', 'departmentName', 'actions'];

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getAll().subscribe(res => {
      this.employees = res.data.content;
    });
  }

  openForm(emp?: Employee) {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '500px',
      data: emp
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchEmployees();
      }
    });
  }

  delete(id: number) {
    if (confirm('Delete this employee?')) {
      this.employeeService.delete(id).subscribe(() => this.fetchEmployees());
    }
  }
}
