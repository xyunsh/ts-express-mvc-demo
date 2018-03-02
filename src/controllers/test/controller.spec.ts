import { EmployeeController } from '../employees/EmployeeController';
import { DepartmentController } from '../employees/DepartmentController';

const dept = new DepartmentController();
dept.details(222).then(data=>console.log(data));

const emp = new EmployeeController();

emp.details(1111).then(data=>console.log(data));