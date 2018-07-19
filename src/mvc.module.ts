import { Module } from "@nestjs/common";

import { employeesProviders } from "@employees/employees.providers";
import controllers from "@mvc/controllers/";
import { EmployeeService } from "@services/employees/employee.service";
import { AuthService, JwtStrategy } from "@auth";

@Module({
    controllers,
    providers: [
        AuthService,
        JwtStrategy,
        EmployeeService,
        ...employeesProviders
    ]
})
export class MvcModule {}
