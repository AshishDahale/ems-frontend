import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Department } from 'src/app/shared/models/department.model';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private dialogRef: MatDialogRef<DepartmentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Department
  ) {
    this.form = this.fb.group({
      id: [data?.id],
      deptCode: [data?.deptCode, Validators.required],
      name: [data?.name, Validators.required],
      location: [data?.location, Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) return;

    const department = this.form.value;

    const request = department.id
      ? this.departmentService.update(department)
      : this.departmentService.save(department);

    request.subscribe({
      next: () => this.dialogRef.close(true),
      error: (err) => console.error('Save failed', err)
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
