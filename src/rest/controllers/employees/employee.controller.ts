import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';
import { Employee } from '@employees';

import BaseController from '../../base.controller';
import { EmployeeService } from '../../../services/employees/employee.service';

@Controller('emp')
export class EmployeeController extends BaseController<Employee>{
    constructor(
        @Inject('EmployeeRepository') private readonly employeeRepository: typeof Employee,
    ){
        super(employeeRepository);
    }
}