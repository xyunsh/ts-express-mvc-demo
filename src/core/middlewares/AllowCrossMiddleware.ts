import { Middleware, NestMiddleware, ExpressMiddleware, Request } from '@nestjs/common';

@Middleware()
export class AllowCrossMiddleware implements NestMiddleware {
    async resolve(...args: any[]) : Promise<ExpressMiddleware> {
        return async (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:8001");
            res.header('Access-Control-Allow-Credentials',true);
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            next();
        }
    }
}