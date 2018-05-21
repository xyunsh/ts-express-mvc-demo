import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { Menu } from '@admin';

import BaseController from '../../base.controller';

@Controller('admin/menu')
export class MenuController extends BaseController<Menu>{
    constructor(
        @Inject('MenuRepository') private readonly menuRepository: typeof Menu,
    ){
        super(menuRepository);
    } 
}