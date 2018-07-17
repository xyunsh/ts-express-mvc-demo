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
    @Query('queryMenus')
    async query() {
        return await this.menuRepository.findAll();
    }

    //http://localhost:3000/graphql?query={menu(id:1){id,title}}
    //http://localhost:3000/graphql?query={id1:menu(id:1){id,title,icon}id2:menu(id:2){id,title,icon}}
    @Query('menu')
    async findOneById(obj, args, context, info) : Promise<Menu>{
        const { id } = args;
        return await this.menuRepository.findById( id );
    }
}