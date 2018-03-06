import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { employeesProviders } from './employees/employees.providers';
import controllers from './controllers/employees';
import { EmployeeService } from './services/employees/employee.service';

@Module({
    imports: [ DatabaseModule ],
    controllers,
    components: [ EmployeeService, ...employeesProviders ]
})
export class EmployeesModule{
    
}