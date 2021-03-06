import { Module } from "@nestjs/common";
import { APP_GUARD } from '@nestjs/core';
import { RightsGuard } from '@admin';

import { employeesProviders } from "@employees/employees.providers";
import { adminProviders } from "@admin/admin.providers";
import controllers from "@rest/controllers/";
import { EmployeeService } from "@services/employees/employee.service";
import { AuthService, JwtStrategy } from "@auth";


/** 
* class RestModule
* * rest api
* ! rest api
* ? 如何使RightsGuard 仅仅作用于RestModule
* TODO ?
* @param 
*/
@Module({
    controllers,
    providers: [
        ...adminProviders,
        ...employeesProviders,
        AuthService,
        JwtStrategy,
        EmployeeService,
        // {
        //     provide: APP_GUARD,
        //     useClass: RightsGuard
        // },
    ]
})
export class RestModule {}
