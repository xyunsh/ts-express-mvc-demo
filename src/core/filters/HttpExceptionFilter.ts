import { ExceptionFilter, Catch, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch( exception: HttpException, response ){
        const status = exception.getStatus();

        response.status(status).json({
            statusCode: status,
            message: `error`
        });
    }
}