import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
import { ApiResponse } from '../models/api-response.model'; // ✅ You need to create this model
import { Page } from '../models/page.model';                // ✅ You need to create this too
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = `${environment.apiBaseUrl}/api/department`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse<Page<Department>>> {
    return this.http.get<ApiResponse<Page<Department>>>(`${this.baseUrl}`);
  }

  save(dept: Department): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(this.baseUrl, dept);
  }

  update(dept: Department): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(this.baseUrl, dept);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }
}
