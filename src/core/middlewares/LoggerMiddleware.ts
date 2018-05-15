import { Middleware, NestMiddleware, ExpressMiddleware, Request } from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
    async resolve(...args: any[]) : Promise<ExpressMiddleware> {
        return async (req:Request, res, next) => {
            console.log('begin ======================>', req.url);
            console.log( 'Logger Args', args);
            next();
        }
    }
}