import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Department } from 'src/app/shared/models/department.model';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  departments: Department[] = [];

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private deptService: DepartmentService,
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {
    this.form = this.fb.group({
      id: [data?.id],
      empCode: [data?.empCode, Validators.required],
      name: [data?.name, Validators.required],
      email: [data?.email, [Validators.required, Validators.email]],
      position: [data?.position, Validators.required],
      salary: [data?.salary, Validators.required],
      departmentId: [data?.departmentId, Validators.required]
    });
  }

  ngOnInit(): void {
    this.deptService.getAll().subscribe(res => {
      this.departments = res.data.content;
          console.log('Departments loaded:', this.departments); // ✅ check this in browser

    });
  }

  submit() {
    if (this.form.invalid) return;

    const emp = this.form.value;
    const req = emp.id
      ? this.empService.update(emp)
      : this.empService.save(emp);

    req.subscribe(() => this.dialogRef.close(true));
  }

  close() {
    this.dialogRef.close();
  }
}
