// http://brianflove.com/2016/11/08/typescript-2-express-node/

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as nunjucks from 'nunjucks';
import { NestFactory } from '@nestjs/core';

import configNunjucks from './core/express-nunjucks';
import * as filters from './filters';
import { ApplicationModule } from './app.module';
import { AnyExceptionFilter } from './core/filters/AnyExceptionFilter';
import { HttpExceptionFilter } from './core/filters/HttpExceptionFilter';

async function bootstrap() {
    const app = await NestFactory.create( ApplicationModule );

    app.use(logger('dev'))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended:false}))
        .use(cookieParser())
        .use(express.static(path.join(__dirname,'../public')));

    configNunjucks(path.join(__dirname, './views'),{
        autoescape:true,
        express:app,
        watch:true,
        filters
    });    

    app.set('view engine', 'html');

    app.useGlobalFilters(new HttpExceptionFilter(), new AnyExceptionFilter());

    await app.listen(3000);
}

bootstrap();