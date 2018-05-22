import { Inject } from '@nestjs/common';
import { Query, Mutation, Resolver, DelegateProperty, Subscription } from '@nestjs/graphql';
import { Menu } from '@admin';

export class MenuResolvers {
    constructor(
        @Inject('MenuRepository') private readonly menuRepository: typeof Menu,
    ){

    } 

    @Query()
    async query() {
        return await this.menuRepository.findAll();
    }
}