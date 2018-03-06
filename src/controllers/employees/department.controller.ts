import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import BaseController from '../baseController';
import { Department } from '../../employees/entities/Department';

@Controller('dept')
export class DepartmentController extends BaseController<Department>{
    constructor(
        @Inject('DepartmentRepository') private readonly deptRepository: typeof Department,
    ){
        super(deptRepository);
    }
}