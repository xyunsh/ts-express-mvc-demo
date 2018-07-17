import { Inject } from '@nestjs/common';
import { Query, Mutation, Resolver, DelegateProperty, Subscription } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Resource } from '@admin';

@Resolver('Resource')
export class ResourceResolvers {
    constructor(
        @Inject('ResourceRepository') private readonly resourceRepository: typeof Resource,
    ){

    } 

    @Query('queryResources')
    async query() {
        return await this.resourceRepository.findAll();
    }

    @Query('countResources')
    async count(){
        return await this.resourceRepository.count();
    }

    @Query('resource')
    async findOneById(obj, args, context, info) : Promise<Resource>{
        const { id } = args;
        return await this.resourceRepository.findById( id );
    }
}