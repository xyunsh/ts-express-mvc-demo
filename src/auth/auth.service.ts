import * as jwt from "jsonwebtoken";
import { Injectable, Inject } from "@nestjs/common";

import { User, Role, Right, Privilege, Resource } from "@admin";
import { JwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User
    ){

    }

    async createToken(user: User) {
        const payload: JwtPayload = { id: user.id };
        const expiresIn = 3600 * 24 * 7;
        const accessToken = jwt.sign(payload, "secretKey", { expiresIn });

        return {
            expiresIn,
            accessToken
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const { id } = payload;
        const user = await this.userRepository.findById<User>(id,{
            include:[
                {
                    model: Role,
                    include: [ 
                        {
                            model:Right,
                            include:[ Privilege, Resource]
                        }
                    ]
                },
                Right
            ]
        });

        const rights = user.roles.map(role=>role.rights.map(r=>r.get({plain:true})));

        console.log(rights);

        return user.get({plain:true});
    }
}
