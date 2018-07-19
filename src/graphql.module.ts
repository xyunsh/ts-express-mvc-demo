import { Module } from '@nestjs/common';

import { employeesProviders } from '@employees/employees.providers';
import { adminProviders } from '@admin/admin.providers';
import { EmployeeService } from '@services/employees/employee.service';
import GraphQLResolvers from '@graphql/resolvers';

@Module({
    providers: [ ...adminProviders, ...GraphQLResolvers ]
})
export class GraphQLApiModule{}