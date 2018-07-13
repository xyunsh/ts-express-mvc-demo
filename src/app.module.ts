import { Module, NestModule, MiddlewareConsumer, RequestMethod, Type } from '@nestjs/common';
import { graphqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { RouterModule, Route } from 'nest-router';

import { RestModule } from './rest.module';
import { MvcModule } from './mvc.module';
import { GraphQLModule as MyGraphQLModule } from './graphql.module';
import { LoggerMiddleware } from './core/middlewares/LoggerMiddleware';
import { AllowCrossMiddleware } from './core/middlewares/AllowCrossMiddleware';
import { routes } from './routes';

// path property to modules
// https://github.com/nestjs/nest/pull/297
@Module({
    imports: [ RouterModule.forRoutes(routes), RestModule, MvcModule, GraphQLModule, MyGraphQLModule ],
    controllers: [ ],
    providers: [ ],
})
export class ApplicationModule implements NestModule {

    constructor(private readonly graphQLFactory: GraphQLFactory){

    }

    configure(consumer: MiddlewareConsumer) : void {
        consumer.apply(LoggerMiddleware)
            //.with({ a: 'abc'}, { c: 'ddd'})
            .forRoutes('*');

        consumer.apply(AllowCrossMiddleware)
            .forRoutes('*');
        
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });
        consumer.apply(graphqlExpress( req=> ({ schema:{}, rootValue: req}))).forRoutes('/graphql');
    }
}
