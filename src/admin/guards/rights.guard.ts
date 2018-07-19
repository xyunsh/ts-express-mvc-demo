import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RIGHTS_METADATA, PRIVILEGE_METADATA, RESOURCE_METADATA, Privileges, Resources } from '../constants';

@Injectable()
export class RightsGuard implements CanActivate {
    constructor(private readonly reflector: Reflector){}

    canActivate(context:ExecutionContext) : boolean {
        const resource = this.reflector.get<Resources>(RESOURCE_METADATA, context.getClass());

        console.log('bind resource', resource);

        if(!resource){
            return true;
        }

        const privilege = this.reflector.get<Privileges>(PRIVILEGE_METADATA, context.getHandler());

        console.log('need privilege', privilege);

        if(!privilege){
            return true;
        }

        const { user } = context.switchToHttp().getRequest();
        
        console.log('user ===>', user);

        return true;
    }

}