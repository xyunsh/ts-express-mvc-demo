import { Inject } from '@nestjs/common';
import { Query, Mutation, Resolver, DelegateProperty, Subscription } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Menu } from '@admin';

@Resolver('Menu')
export class MenuResolvers {
    constructor(
        @Inject('MenuRepository') private readonly menuRepository: typeof Menu,
    ){

    } 

    // http://localhost:3000/graphql?query={getMenus{id,title}}
    @Query('getMenus')
    async getMenus() {
        return await this.menuRepository.findAll();
    }

    @Query('menu')
    async findOneById(obj, args, context, info) : Promise<Menu>{
        const { id } = args;
        return await this.menuRepository.findById( id );
    }
}