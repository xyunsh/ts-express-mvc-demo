import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { employeesProviders } from './employees/employees.providers';
import { authProviders } from './auth/auth.providers';
import controllers from './rest/controllers/';
import { EmployeeService } from './services/employees/employee.service';

@Module({
    imports: [ DatabaseModule ],
    controllers,
    components: [ EmployeeService, ...employeesProviders, ...authProviders ]
})
export class RestModule{
    
}