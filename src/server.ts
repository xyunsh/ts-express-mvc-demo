// http://brianflove.com/2016/11/08/typescript-2-express-node/

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as nunjucks from 'nunjucks';
import * as mvc from 'express-mvc-ts';

import { IndexRoute } from './routes/index';

export class Server {
  public app : express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.api();
  }

  api() : void {

  }

  config() : void {
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended:false}));
    this.app.use(cookieParser());

    nunjucks.configure(path.join(__dirname, './views'),{
      autoescape:true,
      express:this.app,
      watch:true,
    });

    this.app.set('view engine', 'html');

    this.app.use(express.static(path.join(__dirname,'../public')));

    mvc.setup(this.app, {
      controllerDir: path.join(__dirname, './controllers'),
      debugRoutes:true
    });
  }
}