import { Middleware, NestMiddleware, MiddlewareFunction, Request } from '@nestjs/common';

@Middleware()
export class AllowCrossMiddleware implements NestMiddleware {
    async resolve(...args: any[]) : Promise<MiddlewareFunction> {
        return async (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Credentials',true);
            res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            next();
        }
    }
}