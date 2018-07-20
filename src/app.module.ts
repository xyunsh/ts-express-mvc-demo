import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
    Type
} from "@nestjs/common";
import { APP_GUARD } from '@nestjs/core';
import { graphqlExpress } from "apollo-server-express";
import { GraphQLModule, GraphQLFactory } from "@nestjs/graphql";
import { RouterModule, Route } from "nest-router";

import { DatabaseModule } from "@database/database.module";
import { RestModule } from "@rest.module";
import { MvcModule } from "@mvc.module";
import { GraphQLApiModule } from "@graphql.module";
import { LoggerMiddleware } from "@core/middlewares/LoggerMiddleware";
import { routes } from "@routes";
// import { RightsGuard } from '@admin';
// import { AuthGuard } from "@nestjs/passport";
// import { adminProviders } from "@admin/admin.providers";

// path property to modules
// https://github.com/nestjs/nest/pull/297
@Module({
    imports: [
        RouterModule.forRoutes(routes),
        DatabaseModule,
        RestModule,
        MvcModule,
        GraphQLApiModule,
        GraphQLModule,
    ],
    providers: [
        // {
        //     provide: APP_GUARD,
        //     useClass: AuthGuard('jwt')
        // },
        // {
        //     provide: APP_GUARD,
        //     useClass: RightsGuard
        // },
    ]
})
export class ApplicationModule implements NestModule {
    constructor(private readonly graphQLFactory: GraphQLFactory) {}

    configure(consumer: MiddlewareConsumer): void {
        const schema = this.createSchema();

        consumer
            .apply(LoggerMiddleware)
            //.with({ a: 'abc'}, { c: 'ddd'})
            .forRoutes("*")
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes("/graphql");
    }

    createSchema() {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths(
            "./**/*.graphql"
        );
        return this.graphQLFactory.createSchema({ typeDefs });
    }
}
