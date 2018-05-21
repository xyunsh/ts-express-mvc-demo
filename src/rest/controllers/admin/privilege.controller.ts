import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { Privilege } from '@admin';

import BaseController from '../../base.controller';

@Controller('admin/privilege')
export class PrivilegeController extends BaseController<Privilege>{
    constructor(
        @Inject('PrivilegeRepository') private readonly privilegeRepository: typeof Privilege,
    ){
        super(privilegeRepository);
    }
}