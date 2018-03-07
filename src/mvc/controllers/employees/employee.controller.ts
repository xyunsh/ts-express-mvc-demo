import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject, } from '@nestjs/common';

import { Employee } from '../../../employees/entities/Employee';

@Controller('emp')
export class EmployeeController{
    constructor(
        @Inject('EmployeeRepository') private readonly employeeRepository: typeof Employee,
    ){

    }

    @Get('details/:id')
    @Render('employee/details')
    public async details(@Param("id") id:number){
        const employee : Employee = await this.employeeRepository.findById<Employee>(id);
        return { employee };
    }
}