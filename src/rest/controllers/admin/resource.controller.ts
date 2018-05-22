import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { Resource } from '@admin';

import BaseController from '../../base.controller';

@Controller('admin/resource')
export class ResourceController extends BaseController<Resource>{
    constructor(
        @Inject('ResourceRepository') private readonly resourceRepository: typeof Resource,
    ){
        super(resourceRepository);
    }
}