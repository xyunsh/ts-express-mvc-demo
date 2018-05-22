import { Middleware, NestMiddleware, MiddlewareFunction, Request } from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
    async resolve(...args: any[]) : Promise<MiddlewareFunction> {
        return async (req, res, next) => {
            console.log('begin ======================>', req.url);
            console.log( 'Logger Args', args);
            next();
        }
    }
}