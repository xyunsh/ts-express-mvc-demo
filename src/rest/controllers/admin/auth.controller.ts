import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { resultOK, resultError, md5 } from '@utils';
import { User, Role } from '@admin';

import BaseController from '../../base.controller';

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

        const { login_name, password } = loginRequest;

        const user = await this.userRepository.findOne({
            where: {
                login_name
            }, 
            attributes:{
                include:['password_hashed', 'salt']
            }
        });

        if(!user){
            return resultError(410, '帐号不存在,请检查输入');
        }

        if(user.password_hashed !=  md5(`${password}${user.salt}`)){
            return resultError(420, '帐号或者密码输入错误,请检查输入');
        }

        return resultOK({ token: user.id});
    }
}