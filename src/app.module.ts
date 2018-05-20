import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { RestModule } from './rest.module';
import { MvcModule } from './mvc.module';
import { LoggerMiddleware } from './core/middlewares/LoggerMiddleware';
import { AllowCrossMiddleware } from './core/middlewares/AllowCrossMiddleware';
import { OptionsMethodMiddleware } from './core/middlewares/OptionsMethodMiddleware';

// path property to modules
// https://github.com/nestjs/nest/pull/297
@Module({
    imports: [ RestModule, MvcModule ],
    controllers: [ ],
    components: [ ],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer) : void {
        consumer
            .apply([LoggerMiddleware, AllowCrossMiddleware])
            //.with({ a: 'abc'}, { c: 'ddd'})
            .forRoutes(
                { path: '*', method: RequestMethod.ALL }
            );
        
        consumer.apply(OptionsMethodMiddleware).forRoutes( { path: '*', method: RequestMethod.OPTIONS });
    }
}
