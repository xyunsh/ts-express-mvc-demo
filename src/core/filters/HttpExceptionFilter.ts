import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch( exception: HttpException, host: ArgumentsHost ){

        const status = exception.getStatus();

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        
        response
            .status(status)
            .json({
                statusCode: status,
                message: exception.message,
                path: request.url
            });
    }
}