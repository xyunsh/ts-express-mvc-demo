import { Module } from "@nestjs/common";

import { employeesProviders } from "@employees/employees.providers";
import { adminProviders } from "@admin/admin.providers";
import controllers from "@rest/controllers/";
import { EmployeeService } from "@services/employees/employee.service";
import { AuthService, JwtStrategy } from "@auth";

@Module({
    controllers,
    providers: [
        ...adminProviders,
        ...employeesProviders,
        AuthService,
        JwtStrategy,
        EmployeeService,
    ]
})
export class RestModule {}
