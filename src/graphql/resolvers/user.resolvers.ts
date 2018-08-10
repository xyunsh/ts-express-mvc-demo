import { Inject } from "@nestjs/common";
import {
    Query,
    Mutation,
    Resolver,
    DelegateProperty,
    Subscription,
    ResolveProperty
} from "@nestjs/graphql";
import { GraphQLString } from "graphql";
import { User, Role, UserRole } from "@admin";

@Resolver("User")
export class UserResolvers {
    constructor(
        @Inject("UserRepository") private readonly useRepository: typeof User,
        @Inject("RoleRepository") private readonly roleRepository: typeof Role
    ) {}

    //http://localhost:3000/graphql?query={list:queryUsers{id,email,login_name,display_name,roles{id,name,rights{id,privilege{id,name},resource{id,name}}}}}
    @Query("queryUsers")
    async query() {
        return await this.useRepository.findAll({ where: { status: 1 } });
    }

    /**
     * @param user 
     * @param args 
     * @param context 
     * @param info 
     */
    @ResolveProperty("roles")
    async roles(user, args, context, info) {
        const { id } = user;

        return await this.roleRepository.findAll({
            include: [
                {
                    model: User,
                    where: {
                        id
                    }
                }
            ]
        });
    }

    @Query("user")
    async findOneById(obj, args, context, info): Promise<User> {
        const { id } = args;
        return await this.useRepository.findById(id);
    }
}
