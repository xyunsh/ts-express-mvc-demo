import { Employee }  from './entities/Employee';
import { Department } from './entities/Department';

export const employeesProviders = [
    {
        provide: 'EmployeeRepository',
        useValue: Employee
    },{
        provide: 'DepartmentRepository',
        useValue: Department
    }
]