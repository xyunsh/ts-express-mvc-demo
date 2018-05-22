import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { Role } from '@admin';

import BaseController from '../../base.controller';

@Controller('admin/role')
export class RoleController extends BaseController<Role>{
    constructor(
        @Inject('RoleRepository') private readonly roleRepository: typeof Role,
    ){
        super(roleRepository);
    }
}