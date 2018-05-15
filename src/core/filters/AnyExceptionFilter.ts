import { ExceptionFilter, Catch } from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch( exception, response ){
        response
            .status(500)
            .json({
                statusCode:500,
                message: `It's a message from the exception filter`
            })
    }
}