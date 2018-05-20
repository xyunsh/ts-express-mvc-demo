import { Middleware, NestMiddleware, ExpressMiddleware, Request, HttpStatus } from '@nestjs/common';

@Middleware()
export class OptionsMethodMiddleware implements NestMiddleware {
    async resolve(...args: any[]) : Promise<ExpressMiddleware> {
        return async (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Credentials',true);
            res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.status(HttpStatus.OK).send();
            return;
        }
    }
}