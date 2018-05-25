import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch( exception: any, host: ArgumentsHost ){

        console.error('======================================================================================>')
        console.error( exception );
        console.error('======================================================================================>')


        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        response
            .status(500)
            .json({
                statusCode: 500,
                message: exception.message,
                path: request.url
            });
    }
}