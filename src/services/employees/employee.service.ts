import { Component, Inject } from '@nestjs/common';

import { Employee } from '@employees';

@Component()
export class EmployeeService {
    constructor(
        @Inject('EmployeeRepository') private readonly employeeRepository: typeof Employee,
    ) {

    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.findAll<Employee>({ limit: 10 });
    }

    async findById(id: number | string): Promise<Employee> {
        return await this.employeeRepository.findById<Employee>(id);
    }
}
