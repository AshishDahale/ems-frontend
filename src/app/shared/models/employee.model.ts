export interface Employee {
  id?: number;
  empCode: string;
  name: string;
  email: string;
  position: string;
  salary: number;
  departmentId: number;
  departmentName?: string;
}
