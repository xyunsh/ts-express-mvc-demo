import { Module } from '@nestjs/common';

import { employeesProviders } from '@employees/employees.providers';
import { adminProviders } from '@admin/admin.providers';
import controllers from '@rest/controllers/';
import { EmployeeService } from '@services/employees/employee.service';

@Module({
    controllers,
    providers: [ EmployeeService, ...employeesProviders, ...adminProviders ]
})
export class RestModule{ }