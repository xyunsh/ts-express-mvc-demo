import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import BaseController from '../../base.controller';
import { User } from '../../../auth/entities/User';

@Controller('user')
export class UserController extends BaseController<User>{
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User,
    ){
        super(userRepository);
    }
}