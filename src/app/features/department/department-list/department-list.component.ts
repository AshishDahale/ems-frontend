import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentFormComponent } from '../department-form/department-form.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Department } from 'src/app/shared/models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  displayedColumns = ['deptCode', 'name', 'location', 'actions'];

  constructor(
    private departmentService: DepartmentService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchDepartments();
  }

  fetchDepartments() {
    this.departmentService.getAll().subscribe(res => {
      this.departments = res.data.content;
    });
  }

  openForm(dept?: Department) {
    const dialogRef = this.dialog.open(DepartmentFormComponent, {
      width: '400px',
      data: dept
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchDepartments();
      }
    });
  }

  delete(id: number) {
    if (confirm('Are you sure to delete this department?')) {
      this.departmentService.delete(id).subscribe(() => this.fetchDepartments());
    }
  }
}
