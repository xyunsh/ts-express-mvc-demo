import { Employee, Department }  from './index';

export const employeesProviders = [
    { provide: 'EmployeeRepository', useValue: Employee },
    { provide: 'DepartmentRepository', useValue: Department },
]