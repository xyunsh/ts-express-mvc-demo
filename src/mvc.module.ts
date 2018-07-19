import { Module } from "@nestjs/common";

import { employeesProviders } from "@employees/employees.providers";
import controllers from "@mvc/controllers/";
import { EmployeeService } from "@services/employees/employee.service";

@Module({
    controllers,
    providers: [EmployeeService, ...employeesProviders]
})
export class MvcModule {}
