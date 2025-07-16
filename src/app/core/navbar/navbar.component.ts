import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  private reportUrl = `${environment.apiBaseUrl}/api/reports/department-wise-employees`;

  constructor(private http: HttpClient) {}

  openDepartmentWiseReport(): void {
    this.http.get(this.reportUrl, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const file = new Blob([blob], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL); // Open in new tab
      },
      error: (error) => {
        console.error('Failed to download report:', error);
        alert('Report generation failed. Please try again later.');
      }
    });
  }
}
