import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import BaseController from '../../baseController';
import { Employee } from '../../../employees/entities/Employee';
import { EmployeeService } from '../../../services/employees/employee.service';

@Controller('emp')
export class EmployeeController extends BaseController<Employee>{
    constructor(
        @Inject('EmployeeRepository') private readonly employeeRepository: typeof Employee,
    ){
        super(employeeRepository);
    }
}