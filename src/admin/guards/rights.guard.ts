import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import passport from 'passport';
import { AuthGuard } from "@nestjs/passport";

import {
    RIGHTS_METADATA,
    PRIVILEGE_METADATA,
    RESOURCE_METADATA,
    Privileges,
    Resources
} from "../constants";

const authGuardCallback = (err, user, info) => {
    if( err || !user ){
        return null;
    }

    return user;
}

const BaseAuthGuard = AuthGuard('jwt', {
    callback:authGuardCallback
});

@Injectable()
export class RightsGuard extends BaseAuthGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {
        super();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        await super.canActivate(context);

        const resource = this.reflector.get<Resources>(
            RESOURCE_METADATA,
            context.getClass()
        );

        console.log("bind resource", resource);

        if (!resource) {
            return true;
        }

        const privilege = this.reflector.get<Privileges>(
            PRIVILEGE_METADATA,
            context.getHandler()
        );

        console.log("need privilege", privilege);

        if (!privilege) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        console.log("user ===>", user);

        return true;
    }
}
