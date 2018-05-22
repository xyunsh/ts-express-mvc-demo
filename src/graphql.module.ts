import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { employeesProviders } from './employees/employees.providers';
import { adminProviders } from './admin/admin.providers';
import { EmployeeService } from './services/employees/employee.service';
import { MenuResolvers } from './graphql/resolvers/menu.resolvers';

@Module({
    imports: [ DatabaseModule ],
    providers: [ EmployeeService, ...employeesProviders, ...adminProviders, MenuResolvers ]
})
export class GraphQLModule{
    
}