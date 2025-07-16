import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ApiResponse } from '../models/api-response.model';
import { Page } from '../models/page.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = `${environment.apiBaseUrl}/api/employee`;

  constructor(private http: HttpClient) {}

  // getAll(): Observable<ApiResponse<Page<Employee>>> {
  //   return this.http.get<ApiResponse<Page<Employee>>>(this.baseUrl);
  // }

  getAll(page: number, size: number) {
    return this.http.get<ApiResponse<Page<Employee>>>(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  // getByDeptId(deptId:number): Observable<ApiResponse<Employee[]>> {
  //   return this.http.get<ApiResponse<Employee[]>>(this.baseUrl);
  // }

  
  getByDeptId(deptId: number): Observable<ApiResponse<Employee[]>> {
  return this.http.get<ApiResponse<Employee[]>>(`${this.baseUrl}/getByDeptId/${deptId}`);
  }

  getOne(id: number): Observable<ApiResponse<Employee>> {
  console.log('Calling getOne API for employee id:', id);
  return this.http.get<ApiResponse<Employee>>(`${this.baseUrl}/${id}`);
  }

  save(emp: Employee): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(this.baseUrl, emp);
  }

  update(emp: Employee): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(this.baseUrl, emp);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }
}
