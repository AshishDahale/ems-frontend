import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeByDepartmentComponent } from './employee-by-department/employee-by-department.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent, EmployeeByDepartmentComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: EmployeeListComponent }]),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class EmployeeModule { }
