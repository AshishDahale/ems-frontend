@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = '/api/employee';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse<Page<Employee>>> {
    return this.http.get<ApiResponse<Page<Employee>>>(`${this.baseUrl}`);
  }

  save(dept: Employee): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(this.baseUrl, dept);
  }

  update(dept: Employee): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(this.baseUrl, dept);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }
}
