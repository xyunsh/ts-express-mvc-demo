import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { Employee } from '../../employees/entities/Employee';

@Component()
export class EmployeeService {
  constructor(
    @Inject('EmployeeRepository') private readonly employeeRepository: typeof Employee,
  ) {

  }
  
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.findAll<Employee>({ limit: 10});
  }

  async findById( id: number|string ): Promise<Employee> {
    return await this.employeeRepository.findById<Employee>(id);
  }
}
