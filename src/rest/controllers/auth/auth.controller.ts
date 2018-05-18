import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';
//import { resultOK } from '../../../utils/';
import { resultOK } from '@utils/result';
import BaseController from '../../base.controller';
import { User, Role } from '../../../auth/';

export class LoginRequest {
    readonly login_name: string;
    readonly password: string;
    readonly account: string;
}

@Controller('auth')
export class AuthController {
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User,
        @Inject('RoleRepository') private readonly roleRepository: typeof Role,
    ){
        
    }

    @Post("login")
    async login(@Body() loginRequest: LoginRequest){
        const user = await this.userRepository.findOne({
            where: {
                login_name: loginRequest.login_name
            }
        });

        if(!user){
            return resultOK(200);
            //return resultError(400, '帐号不存在,请检查输入');
        }


    }
}