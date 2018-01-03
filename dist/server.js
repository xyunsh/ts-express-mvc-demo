"use strict";
// http://brianflove.com/2016/11/08/typescript-2-express-node/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mvc = require("express-mvc-ts");
const express_nunjucks_1 = require("./core/express-nunjucks");
const filters = require("./filters");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        express_nunjucks_1.default(path.join(__dirname, './views'), {
            autoescape: true,
            express: this.app,
            watch: true,
            filters
        });
        this.app.set('view engine', 'html');
        this.app.use(express.static(path.join(__dirname, '../public')));
        mvc.setup(this.app, {
            controllerDir: path.join(__dirname, './controllers/employees'),
            debugRoutes: true
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map