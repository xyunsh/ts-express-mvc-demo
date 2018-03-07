import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import BaseController from '../../baseController';
import { User, Role } from '../../../auth/';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User,
        @Inject('RoleRepository') private readonly roleRepository: typeof Role,
    ){

    }
}