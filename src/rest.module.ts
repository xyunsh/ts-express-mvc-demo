import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { employeesProviders } from './employees/employees.providers';
import { adminProviders } from './admin/admin.providers';
import controllers from './rest/controllers/';
import { EmployeeService } from './services/employees/employee.service';

@Module({
    imports: [ DatabaseModule ],
    controllers,
    providers: [ EmployeeService, ...employeesProviders, ...adminProviders ]
})
export class RestModule{
    constructor(){
        console.log('init RestModule');
    }   
}