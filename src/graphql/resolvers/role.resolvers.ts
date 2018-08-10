import { Inject } from '@nestjs/common';
import { Query, Mutation, Resolver, ResolveProperty } from '@nestjs/graphql';
import { Role, Right } from '@admin';

@Resolver('Role')
export class RoleResolvers {
    constructor(
        @Inject('RoleRepository') private readonly roleRepository: typeof Role,
        @Inject('RightRespository') private readonly rightRepository: typeof Right,
    ){

    } 

    @Query('queryRoles')
    async query() {
        return await this.roleRepository.findAll();
    }

    @ResolveProperty()
    async rights(role, args, context, info) {
        const { id } = role;

        return await this.rightRepository.findAll({
            include: [
                {
                    model: Role,
                    where: {
                        id
                    }
                }
            ]
        });
    }

    @Query('role')
    async findOneById(obj, args, context, info) : Promise<Role>{
        const { id } = args;
        return await this.roleRepository.findById( id );
    }
}