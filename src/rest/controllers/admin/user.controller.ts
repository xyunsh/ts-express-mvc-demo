import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { User } from '@admin';

import BaseController from '../../base.controller';

@Controller('user')
export class UserController extends BaseController<User>{
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User,
    ){
        super(userRepository);
    }
}