"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const employees = new sequelize_typescript_1.Sequelize({
    name: 'employees',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    modelPaths: [
        __dirname + '/employees',
    ]
});
exports.employees = employees;
const sakila = new sequelize_typescript_1.Sequelize({
    name: 'sakila',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    modelPaths: [
        __dirname + '/sakila'
    ]
});
exports.sakila = sakila;
//# sourceMappingURL=sequelize.js.map