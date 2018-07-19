import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( private readonly authService: AuthService ){
        super({
            //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//Authorization: bearer JSON_WEB_TOKEN_STRING.....
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
            secretOrKey: 'secretKey'
        });
    }

    async validate(payload: JwtPayload, done: Function){
        console.log('validate', payload);

        const user = await this.authService.validateUser(payload);

        if(!user){
            return done(new UnauthorizedException(), false);
        }

        done(null, user);
    }
}