import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeByDepartmentComponent } from './features/employee/employee-by-department/employee-by-department.component';
import { EmployeeDetailComponent } from './features/employee/employee-detail/employee-detail.component';

// const routes: Routes = [{ path: 'department', loadChildren: () => import('./features/department/department.module').then(m => m.DepartmentModule) }, { path: 'employee', loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule) }];

const routes: Routes = [
  { path: '', redirectTo: 'employee-by-department', pathMatch: 'full' },
  { path: 'department', loadChildren: () => import('./features/department/department.module').then(m => m.DepartmentModule) },
  { path: 'employee', loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'employee-by-department', component: EmployeeByDepartmentComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
